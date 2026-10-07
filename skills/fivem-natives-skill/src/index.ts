import { fetchNatives } from "./fetcher"
import { buildDocs, groupByNamespace } from "./generator"
import {
	computeHash,
	readSavedHash,
	saveHash,
	buildVersionString,
} from "./versioning"

const force = process.argv.includes("--force")

export async function updateNatives() {
	console.log("=== FiveM Natives Builder ===")

	const data = await fetchNatives()
	if (!data) {
		if (force) {
			console.log("--force: skipping ETag check not applicable (no data returned).")
		} else {
			console.log("Nothing to do.")
		}
		return
	}

	const json = JSON.stringify(data)
	const currentHash = computeHash(json)
	const savedHash = readSavedHash()
	if (!force && currentHash === savedHash) {
		console.log("Natives unchanged (hash match). Use --force to rebuild anyway.")
		return
	}

	if (savedHash && currentHash !== savedHash) {
		console.log(`Natives changed! Hash: ${currentHash.slice(0, 12)}... (was ${savedHash.slice(0, 12)}...)`)
		console.log(`Total natives: ${data.count}`)
	} else if (force) {
		console.log(`Force rebuild. Total natives: ${data.count}`)
	} else {
		console.log(`First run. Total natives: ${data.count}`)
	}

	const namespaceMap = groupByNamespace(data.natives)
	const version = buildVersionString()

	console.log(`Version: ${version}`)
	console.log(`Namespaces: ${namespaceMap.size}`)

	buildDocs(namespaceMap, version)

	saveHash(currentHash)

	console.log("Done!")
}

updateNatives().catch((err) => {
	console.error("Error:", err)
	process.exit(1)
})

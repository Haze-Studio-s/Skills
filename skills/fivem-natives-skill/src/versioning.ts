import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "crypto";

const NATIVES_HASH_FILE = "NATIVES_HASH";

export function computeHash(data: string): string {
	return createHash("sha256").update(data).digest("hex");
}

export function readSavedHash(): string | null {
	if (!existsSync(NATIVES_HASH_FILE)) return null;
	const content = readFileSync(NATIVES_HASH_FILE, "utf-8").trim();
	return content || null;
}

export function saveHash(hash: string): void {
	writeFileSync(NATIVES_HASH_FILE, hash, "utf-8");
}

export function buildVersionString(): string {
	const pkg = JSON.parse(readFileSync("package.json", "utf-8")) as { version: string };
	const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
	return `${pkg.version}+natives.${date}`;
}

export function buildNativesTag(): string {
	const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
	return `natives-${date}`;
}

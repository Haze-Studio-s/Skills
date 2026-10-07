import { updateNatives } from "./index"

export default {
	async scheduled() {
		await updateNatives()
	}
}
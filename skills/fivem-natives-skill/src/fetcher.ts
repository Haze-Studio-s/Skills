import { existsSync, readFileSync, writeFileSync } from "node:fs";
import type { ApiResponse } from "./types";

const API_URL = "https://cfxnatives.dev/api/natives";
const ETAG_CACHE_FILE = ".etag-cache";

export async function fetchNatives(): Promise<ApiResponse | null> {
	const headers: Record<string, string> = {
		Accept: "application/json",
	};

	if (existsSync(ETAG_CACHE_FILE)) {
		const etag = readFileSync(ETAG_CACHE_FILE, "utf-8").trim();
		if (etag) headers["If-None-Match"] = etag;
	}

	const response = await fetch(API_URL, { headers });

	if (response.status === 304) {
		console.log("API returned 304 Not Modified — natives unchanged.");
		return null;
	}

	if (!response.ok) {
		throw new Error(`API request failed: ${response.status} ${response.statusText}`);
	}

	const etag = response.headers.get("etag");
	if (etag) {
		writeFileSync(ETAG_CACHE_FILE, etag, "utf-8");
	}

	const data = (await response.json()) as ApiResponse;
	return data;
}

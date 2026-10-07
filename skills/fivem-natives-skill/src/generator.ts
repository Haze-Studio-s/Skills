import { mkdirSync, readdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "path";
import type { Native } from "./types";

const DOCS_DIR = "docs";
const TEMPLATES_DIR = "templates";

function formatParams(params: Native["params"]): string {
	if (params.length === 0) return "";
	const rows = params.map((p) => `| \`${p.name}\` | \`${p.type}\` |`).join("\n");
	return `**Parameters:**\n| Name | Type |\n|------|------|\n${rows}\n`;
}

function formatExamples(examples: Native["examples"]): string {
	if (!examples || examples.length === 0) return "";
	const first = examples[0];
	if (!first?.code) return "";
	const lang = first.lang?.toLowerCase() ?? "lua";
	return `**Example:**\n\`\`\`${lang}\n${first.code.trim()}\n\`\`\`\n`;
}

function formatNative(native: Native): string {
	const lines: string[] = [];

	lines.push(`## ${native.name}`);
	lines.push(`**Hash:** \`${native.hash}\` | **Returns:** \`${native.returnType || "void"}\``);

	if (native.altName && native.altName !== native.name) {
		lines.push(`**Alt name:** \`${native.altName}\``);
	}

	lines.push("");

	if (native.description?.trim()) {
		lines.push(native.description.trim());
		lines.push("");
	}

	const params = formatParams(native.params);
	if (params) {
		lines.push(params);
	}

	const examples = formatExamples(native.examples);
	if (examples) {
		lines.push(examples);
	}

	if (native.url) {
		lines.push(`[View docs](${native.url})`);
	}

	lines.push("");
	lines.push("---");
	lines.push("");

	return lines.join("\n");
}

export function generateNamespaceFile(
	namespace: string,
	natives: Native[],
	version: string,
	date: string
): string {
	const sorted = [...natives].sort((a, b) => a.name.localeCompare(b.name));

	const header = [
		`# ${namespace} Natives`,
		"",
		`> ${natives.length} natives | Version: \`${version}\` | Updated: ${date}`,
		"",
	].join("\n");

	const body = sorted.map(formatNative).join("");

	return header + body;
}

export function generateIndex(
	namespaceMap: Map<string, Native[]>,
	version: string,
	date: string
): string {
	const sorted = [...namespaceMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));
	const total = sorted.reduce((acc, [, natives]) => acc + natives.length, 0);

	const rows = sorted
		.map(([ns, natives]) => `| [${ns}](${ns.toLowerCase()}.md) | ${natives.length} |`)
		.join("\n");

	return [
		"# FiveM Natives Reference",
		"",
		`> **Version:** \`${version}\` | **Updated:** ${date} | **Total:** ${total} natives across ${sorted.length} namespaces`,
		"",
		"This skill provides a complete reference for FiveM native functions, organized by namespace.",
		"Use it as context when developing FiveM resources.",
		"",
		"## Namespaces",
		"",
		"| Namespace | Count |",
		"|-----------|-------|",
		rows,
		"",
		"## Static References",
		"",
		"- [Types Reference](types-reference.md) — Native types: Ped, Vehicle, Entity, Vector3, etc.",
		"- [Best Practices](best-practices.md) — FiveM development best practices",
		"",
	].join("\n");
}

export function buildDocs(
	namespaceMap: Map<string, Native[]>,
	version: string
): void {
	mkdirSync(DOCS_DIR, { recursive: true });

	const date = new Date().toISOString().slice(0, 10);

	// Generate index
	const indexContent = generateIndex(namespaceMap, version, date);
	Bun.write(join(DOCS_DIR, "index.md"), indexContent);

	// Generate one file per namespace
	for (const [namespace, natives] of namespaceMap) {
		const content = generateNamespaceFile(namespace, natives, version, date);
		Bun.write(join(DOCS_DIR, `${namespace.toLowerCase()}.md`), content);
	}

	console.log(`Generated ${namespaceMap.size} namespace files + index.md`);

	// Copy template files (do not overwrite manually edited files in docs if they match a template)
	if (existsSync(TEMPLATES_DIR)) {
		const templateFiles = readdirSync(TEMPLATES_DIR);
		for (const file of templateFiles) {
			const src = join(TEMPLATES_DIR, file);
			const dest = join(DOCS_DIR, file);
			copyFileSync(src, dest);
		}
		console.log(`Copied ${templateFiles.length} template file(s) to docs/`);
	}
}

export function groupByNamespace(natives: Native[]): Map<string, Native[]> {
	const map = new Map<string, Native[]>();
	for (const native of natives) {
		const ns = native.namespace || "UNKNOWN";
		if (!map.has(ns)) map.set(ns, []);
		map.get(ns)!.push(native);
	}
	return map;
}

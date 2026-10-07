// This file uses Bun's Cron scheduler to run the `build` function on log on.

await Bun.cron("./scheduler-worker.ts", "@daily", "skill-fivem-update")

console.log("Scheduler registered, will run daily.")

export { }
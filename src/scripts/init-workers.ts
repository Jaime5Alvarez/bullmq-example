import orderWorker from "@/queues/example/workers/add-order";

export function startAllWorkers() {
	console.log("Starting all workers...");

	const activeWorkers = [orderWorker];

	console.log(`${activeWorkers.length} workers started correctly`);

	return activeWorkers;
}

startAllWorkers();

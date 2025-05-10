import { Worker } from "bullmq";
import { QueueName } from "..";
import { connectionCache } from "@/cache-storage";

const orderWorker = new Worker(
	QueueName.ADD_ORDER,
	async (job) => {
		await new Promise((resolve) => setTimeout(resolve, 5000));
		console.log(job.data);
	},
	{ connection: connectionCache, concurrency: 5 },
);

orderWorker.on("completed", (job) => {
	console.log(`Job ${job.id} completed`);
});

orderWorker.on("progress", (job, progress) => {
	console.log(`Job ${job?.id} progress: ${progress}`);
});

orderWorker.on("active", (job) => {
	console.log(`Job ${job?.id} active`);
});
orderWorker.on("failed", (job, error) => {
	console.log(`Job ${job?.id} failed: ${error}`);
});

export default orderWorker;

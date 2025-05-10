import { connectionCache } from "@/cache-storage";
import { Queue } from "bullmq";

export enum QueueName {
	ADD_ORDER = "add-order",
}

interface IAddOrderJob {
	id: string;
	product: string;
	quantity: number;
	price: number;
}

export const addOrderQueue = new Queue<IAddOrderJob>(QueueName.ADD_ORDER, {
	connection: connectionCache,
	defaultJobOptions: {
		removeOnComplete: 5,
		removeOnFail: 5,
		attempts: 3,
		backoff: {
			type: "exponential",
			delay: 1000,
		},
	},
});

export async function addOrderQueueJob(jobId: string, data: IAddOrderJob) {
	await addOrderQueue.add(
		QueueName.ADD_ORDER,
		data,
		{
			jobId: jobId,
		},
	);
}

export async function getAddOrderQueueJob(jobId: string) {
	return await addOrderQueue.getJob(jobId);
}

import { connectionCache } from "@/cache-storage";
import { Queue } from "bullmq";
import sharedConfigJobsOptions from "@/queues/config";

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
		...sharedConfigJobsOptions,
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

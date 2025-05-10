import type { JobsOptions } from "bullmq";

const sharedConfigJobsOptions: JobsOptions = {
	removeOnComplete: 5,
	removeOnFail: 5,
	attempts: 3,
	backoff: {
		type: "exponential",
		delay: 1000,
	},
};

export default sharedConfigJobsOptions;

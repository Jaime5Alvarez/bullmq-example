import IORedis from "ioredis";

export const connectionCache = new IORedis({
	host: "localhost",
	port: 6379,
	maxRetriesPerRequest: null,
});

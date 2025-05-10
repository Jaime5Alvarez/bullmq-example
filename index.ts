import express, { type Request, type Response } from "express";
import { addOrderQueueJob, getAddOrderQueueJob } from "@/queues/example";
import crypto from "node:crypto";

const app = express();
const port = 3000;

app.get("/health", (req: Request, res: Response) => {
	res.send("OK");
});

app.post("/add-order", async (req: Request, res: Response) => {
	const jobId = crypto.randomUUID();

	await addOrderQueueJob(jobId, {
		id: jobId,
		product: "123",
		quantity: 1,
		price: 100,
	});
	res.status(200).json({ message: "OK", jobId });
});

app.get("/get-order-job", async (req: Request, res: Response) => {
	const jobId = req.query.jobId as string;

	if (!jobId) {
		res.status(400).json({ error: "Job ID is required" });
		return;
	}

	const job = await getAddOrderQueueJob(jobId);
	if (!job) {
		res.status(404).json({ error: "Job not found" });
		return;
	}

	res.status(200).json({ message: "OK", status: await job.getState() });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

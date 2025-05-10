# bullmq-example

## Setup

To setup your redis:

```bash
docker pull redis
```

To run redis:

```bash
docker run -d -p 6379:6379 --name redis-server redis
```

## Install

To install dependencies:

```bash
bun install
```

## Run

To run:

```bash
bun run dev
```

To start workers:

```bash
bun run start:workers
```

## Format

To format:

```bash
bun format
```

## Lint

To lint:

```bash
bun lint
```

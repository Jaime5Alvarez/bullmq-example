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

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

To format:

```bash
bun format
```

To lint:

```bash
bun lint
```

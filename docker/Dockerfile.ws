FROM oven/bun:1

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y openssl libssl-dev

COPY . .

RUN bun install
RUN bun run generate:db

EXPOSE 8080

CMD ["bun","run","start:ws"]
# Coolify / generic Docker deploy for TanStack Start (Nitro node-server).
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3333
COPY --from=build /app/.output ./
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

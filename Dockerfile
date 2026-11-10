# Coolify / generic Docker deploy for TanStack Start (Nitro node-server).
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3333
COPY --from=build /app/.output ./
EXPOSE 3333
CMD ["node", ".output/server/index.mjs"]
ENV HOST=0.0.0.0

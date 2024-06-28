FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=api --prod /prod/api
RUN pnpm deploy --filter=web --prod /prod/web

FROM base AS api
WORKDIR /usr/src/app
COPY --from=build /prod/api/node_modules ./node_modules
COPY --from=build /prod/api/dist ./dist
COPY --from=build /prod/api/prisma ./prisma
COPY --from=build /prod/api/package.json .
EXPOSE 4000
CMD [ "pnpm", "start:migrate" ]

FROM base AS web
WORKDIR /usr/src/app
COPY --from=build /prod/web/node_modules ./node_modules
COPY --from=build /prod/web/.next ./.next
COPY --from=build /prod/web/public ./public
COPY --from=build /prod/web/package.json .
EXPOSE 3000
CMD [ "pnpm", "start" ]

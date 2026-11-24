# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS build
WORKDIR /app
RUN npm install --global pnpm@10.33.4
COPY . .
RUN pnpm install --frozen-lockfile
ENV NX_DAEMON=false
RUN pnpm nx build @mlightcad/cad-editor-demo

FROM nginx:stable-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/cad-editor-demo/dist/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

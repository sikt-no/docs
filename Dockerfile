FROM node:14.18.1-buster-slim as site-builder
RUN apt-get update && apt-get install -y --no-install-recommends \
		git \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /site
COPY package.json package-lock.json ./
RUN npm ci
COPY .git ./.git
COPY docusaurus.config.js sidebars.js ./
COPY docs ./docs/
COPY src ./src/
COPY static ./static/
RUN npm run build

FROM nginx:1.21.3-alpine
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=site-builder /site/build /web

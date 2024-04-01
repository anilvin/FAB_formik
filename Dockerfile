FROM node:16-alpine

LABEL maintainer="Newgen Software Technologies Limited"

RUN mkdir /NewgenPortal
WORKDIR /NewgenPortal

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./public ./public
COPY ./node_modules ./node_modules
COPY --chown=nextjs:nodejs ./.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

# CMD ["node", "server.js"]
CMD ["node_modules/.bin/next", "start"]


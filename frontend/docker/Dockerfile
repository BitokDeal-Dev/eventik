FROM node:18-alpine AS builder
            
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
            
FROM node:18-alpine AS production
            
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
            
COPY --from=builder --chown=nextjs:nodejs /app /app
            
EXPOSE 3000
ENV NODE_ENV production
            
CMD ["yarn", "start"]
           
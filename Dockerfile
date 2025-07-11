# stage 1
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

# stage 2
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./

EXPOSE 3000

CMD ["node", "dist/main"]
# DealPlus

Project scaffold with the uploaded React demo preserved and a NestJS microservices monorepo starter.

## Layout
- `frontend/` — existing Vite/React demo and target feature-module folders.
- `backend/` — NestJS monorepo: API Gateway and 11 service application starters.
- `infrastructure/` — local infrastructure configuration.
- `docs/` — architecture, API catalogue and database ownership notes.
- `docker-compose.yml` — local MySQL, RabbitMQ, Redis and MinIO.

## Prerequisites
Node.js 20+, npm, Docker Desktop/Engine with Compose, and VS Code.

## Start infrastructure
From the repository root:
```bash
cp .env.example .env
docker compose up -d
```
Ports: MySQL 3306, RabbitMQ 5672 (management UI 15672), Redis 6379, MinIO API 9000 (console 9001).

## Start frontend
```bash
cd frontend
npm install
npm run dev
```
The original demo source is preserved. It currently uses JavaScript/JSX and demo state management; migrate to TypeScript and API integration incrementally.

## Start backend
```bash
cd backend
npm install
npm run start:gateway
```
Start other services in separate terminals, e.g. `npm run start:leads`. Each application currently has a basic `GET /api/v1/health` endpoint. Assign and review final ports before running all services simultaneously.

## Important
This ZIP is a scaffold, not a finished production application. Business endpoints, database entities/migrations, authentication, RabbitMQ integration, file storage integration and tests still need implementation. Services own their databases; do not directly query another service's database. Use migrations, idempotent event consumers, retries, dead-letter queues and an outbox pattern for critical workflows. Never commit real secrets.

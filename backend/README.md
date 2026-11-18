# DealPlus Backend (NestJS monorepo)

## Applications and local ports

| Application | Default port |
|---|---:|
| API Gateway | 3000 |
| Auth Service | 3001 |
| Lead Service | 3002 |
| Document Service | 3003 |
| RFP Service | 3004 |
| Opportunity Service | 3005 |
| Approval Service | 3006 |
| Assignment Service | 3007 |
| Compliance Service | 3008 |
| Delivery Service | 3009 |
| Notification Service | 3010 |
| Reporting Service | 3011 |

Each app currently has a minimal NestJS bootstrap, module and health endpoint. Start one app at a time with the corresponding npm script in `package.json`.

## Setup

```bash
npm install
npm run start:gateway
```

In another terminal, for example:

```bash
npm run start:leads
```

Copy `.env.example` to `.env` and configure local values. This scaffold intentionally does not yet connect TypeORM, MySQL, RabbitMQ, Redis or MinIO. Add service-owned database configuration and migrations before implementing business persistence.

## NestJS CLI

This repository uses a NestJS monorepo configuration in `nest-cli.json`. Each application has its own `tsconfig.app.json`.

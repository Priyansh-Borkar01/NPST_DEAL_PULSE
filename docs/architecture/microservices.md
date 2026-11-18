# DealPlus microservices architecture

## Applications
1. API Gateway — frontend entry point, routing, rate limiting and request correlation.
2. Auth Service — identity, users, roles, permissions and verticals.
3. Lead Service — leads, accounts, contacts, qualification and lead history.
4. Document Service — document metadata, versions, access control and object storage integration.
5. RFP Service — extraction orchestration, field mapping and synopsis.
6. Opportunity Service — opportunities, stages, products, revenue and owners.
7. Approval Service — approval requests, workflow actions and P&L decisions.
8. Assignment Service — product/vertical mappings and technical lead assignments.
9. Compliance Service — matrices, requirements, evidence, reviews and sign-offs.
10. Delivery Service — Pre-PO evaluations and Post-PO projects/milestones.
11. Notification Service — in-app notifications and delivery integrations.
12. Reporting Service — dashboard read models and reports.

## Communication
- Frontend to Gateway: REST/JSON.
- Gateway to services: REST initially.
- Asynchronous workflows: RabbitMQ events.
- Redis: cache and/or BullMQ queues where justified.
- Files: MinIO; MySQL stores metadata and relationships.

## Ownership
Each service owns its database/schema and migrations. No cross-service database joins or direct writes. Exchange identifiers and data through APIs/events. Use event versioning, idempotent consumers, retries, dead-letter queues and an outbox pattern.

## RFP flow
1. Sales uploads through Document Service.
2. File stored in MinIO; metadata stored in Document DB.
3. DocumentUploaded triggers RFP processing.
4. RFP Service extracts/maps fields and stores source references.
5. Frontend retrieves extraction data for human review.
6. Accepted synopsis emits SynopsisAccepted.
7. Opportunity Service creates the opportunity idempotently.
8. Assignment Service maps products to technical owners.
9. Notification Service informs assigned users.

A document is uploaded once. Document links associate the same document ID with lead and opportunity records, subject to authorization.

## Production
Add distributed tracing, centralized logs, metrics, health/readiness probes, secrets management, TLS, backups, migrations, deployment pipelines and security review.

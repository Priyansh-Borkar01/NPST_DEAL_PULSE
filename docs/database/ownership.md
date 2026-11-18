# Database ownership plan

Use one MySQL server for local development if convenient, but maintain a separate database/schema and credentials/permissions per service.

| Service | Suggested database |
|---|---|
| Auth | auth_db |
| Lead | lead_db |
| Document | document_db |
| RFP | rfp_db |
| Opportunity | opportunity_db |
| Approval | approval_db |
| Assignment | assignment_db |
| Compliance | compliance_db |
| Delivery | delivery_db |
| Notification | notification_db |
| Reporting | reporting_db (read models) |

The API Gateway does not own business data. Reporting consumes events or uses service APIs to build read models. Do not create cross-database foreign keys; store external service IDs and validate through APIs/events.

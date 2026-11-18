# Frontend feature modules

The original DealPlus demo source is preserved in `src/pages`, `src/components`, `src/store` and `src/data`.
These `src/modules` folders are target feature-based locations for incremental refactoring.

Each feature can contain:
- `pages/`: route-level screens
- `components/`: feature-specific UI
- `api/`: API calls through a shared API client
- `hooks/`: TanStack Query hooks and feature hooks
- `types/`: TypeScript types and API contracts

The uploaded demo currently uses JavaScript/JSX. Migrate incrementally; do not rename everything before API contracts are agreed.

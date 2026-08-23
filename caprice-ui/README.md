Deployment refresh
# CAPRICE UI Prototype

A frontend-only, mock-data prototype combining the CAPRICE V6.1 secure online-first blueprint with an original animated neural-orb and department graph interface.

## Included
- CAPRICE core orb: Standby, Processing and Speaking cycle
- Push-to-talk using browser SpeechRecognition when available, with safe simulation fallback
- Department graph and overview panels
- Development login placeholder
- HSE MVP workspace: observation, DOB modelling, corrective actions, approval, KPI and document/OCR placeholder
- Mock Business 001 (Ruth Jewels) summary
- Responsive navy/teal interface
- Docker deployment

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Docker
```bash
docker compose up --build
```
Open http://localhost:3000

## Important prototype boundaries
- All records and metrics are mock data.
- Drafts are not persisted after refresh.
- Login is a UI placeholder, not real authentication.
- Voice uses browser support only and does not call a cloud service.
- No payment, trading, email, calendar, OCR, database or external-system action is executed.

## Next production phase
Replace mock stores with authenticated APIs, Entra identity, PostgreSQL, audit services, approval workflows and department services according to the CAPRICE blueprint.

# User Directory — Interview Stack Scaffold

Full-stack interview exercise scaffold covering the technologies listed below. The UI shell and API wiring are in place; candidate tasks live in stub files and `INTERVIEW.md`.

## Tech stack

| Layer | Technology |
|-------|------------|
| Backend | Python, Django, Django REST Framework |
| Real-time | Django Channels (WebSockets) |
| Frontend | Angular (TypeScript) |
| Database | PostgreSQL (relational) |
| CI/CD | GitHub Actions |
| Local dev | Docker Compose |

Cloud deployment is intentionally out of scope. Docker images are structured so they can be deployed to Heroku, DigitalOcean, or AWS if an interviewer asks.

## Quick start (Docker Compose)

```bash
cp .env.example .env
docker compose up --build
```

- Frontend: http://localhost:4200
- Backend API: http://localhost:8000/api/users/
- WebSocket: ws://localhost:8000/ws/users/

The backend runs migrations and seeds users from JSONPlaceholder on startup.

## Native development (faster iteration)

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Optional: copy .env.example to backend/.env and set POSTGRES_* for PostgreSQL.
# Without POSTGRES_DB, Django falls back to SQLite.
python manage.py migrate
python manage.py seed_users
daphne -b 0.0.0.0 -p 8000 config.asgi:application
```

### Frontend

```bash
cd frontend
npm install
npm start
```

The dev server proxies `/api` and `/ws` to Django via `proxy.conf.json`.

## Project layout

```
backend/     Django + DRF + Channels + PostgreSQL
frontend/    Angular (TypeScript) SPA
INTERVIEW.md Candidate task specification
```

## Candidate tasks

See [INTERVIEW.md](./INTERVIEW.md) for the full exercise description.

## CI

GitHub Actions runs on push/PR:

- **backend** — migrate, `manage.py check`, pytest (PostgreSQL service container)
- **frontend** — `npm ci`, production build

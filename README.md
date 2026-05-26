# React + PHP + MySQL — Two-Tier Docker Project

## Project Structure

```
my-project/
├── frontend/          ← React app
│   ├── public/
│   └── src/
│       ├── index.js
│       └── App.js
├── backend/           ← PHP API
│   └── api.php
└── docker-compose.yml
```

## How to Run

```bash
docker-compose up -d
```

| URL | Description |
|-----|-------------|
| http://localhost:3000 | React frontend |
| http://localhost:8080/api.php | PHP API |

## Key Points

- React calls PHP using `localhost:8080` (from the browser)
- PHP connects to MySQL using `db` (the service name, not localhost)
- All containers share `app-network` so they can talk to each other

## Stop

```bash
docker-compose down
```

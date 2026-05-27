# Places Explore App

A full-stack learning project for exploring and sharing places. Users can browse profiles and (as the app grows) add new places. The repository is split into a **React frontend** and a **Node.js backend**.

## Project structure

```
places-explore-app/
├── frontend/    # React UI (Create React App)
└── backend/     # Node.js HTTP API server
```

## Frontend

The frontend is a [Create React App](https://github.com/facebook/create-react-app) project built with **React 19** and **react-router-dom** for client-side routing.

### Features

- **Home (`/`)** — Lists users and how many places they have shared, using reusable UI components (`UsersList`, `UserItem`, `Card`, `Avatar`).
- **New place (`/places/new`)** — Placeholder page for adding a new place (to be expanded).

### Tech stack

- React, React DOM
- React Router v5
- CSS modules / component-level styles

### Folder layout

| Path | Purpose |
|------|---------|
| `src/user/` | User pages and components |
| `src/places/` | Place-related pages (e.g. `NewPlace`) |
| `src/shared/components/UIElements/` | Shared UI (`Card`, `Avatar`) |

### Run the frontend

```bash
cd frontend
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

Other scripts: `npm test`, `npm run build`.

---

## Backend

The backend is a minimal **Node.js** server using the built-in `http` module. It listens on **port 5001** and responds to incoming requests with a simple HTML success page. Commented code in `app.js` shows optional file I/O with the `fs` module (`user-data.txt`).

### Tech stack

- Node.js (`http` module)
- Express is listed in `package.json` for future API routes (not wired in `app.js` yet)

### Run the backend

```bash
cd backend
npm install
node app.js
```

The server starts on [http://localhost:5001](http://localhost:5001).

---

## Running both together

1. Start the backend: `cd backend && node app.js`
2. In another terminal, start the frontend: `cd frontend && npm start`

Open the frontend in your browser; connect it to the backend API as you add fetch calls and REST endpoints.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

## Repository

[https://github.com/webkhushboo/places-explore-app](https://github.com/webkhushboo/places-explore-app)

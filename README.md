# Zerodha Clone

A full-stack clone of the Zerodha trading platform, built with the MERN stack (MongoDB, Express, React, Node.js). The project is split into three parts: a marketing/landing website, a trading dashboard, and a backend API.

## Project Structure

```
Zerodhaclone/
├── backend/            # Express + MongoDB API
│   ├── Controllers/    # Route controller logic (e.g. AuthController.js)
│   ├── Middlewares/    # Custom middleware (e.g. AuthMiddleware.js)
│   ├── model/          # Mongoose models (Holdings, Orders, Positions)
│   ├── Models/         # User model
│   ├── Routes/         # Express route definitions (AuthRoute.js)
│   ├── schemas/        # Mongoose schemas (Holdings, Order, Positions)
│   ├── util/           # Utility/helper functions
│   ├── .env            # Environment variables (not committed)
│   ├── index.js         # Entry point for the backend server
│   └── package.json
│
├── dashboard/          # React app for the trading dashboard
│   ├── src/
│   │   ├── components/  # Dashboard, Orders, Positions, Holdings, WatchList,
│   │   │                 # Funds, Summary, TopBar, Menu, BuyActionWindow, etc.
│   │   ├── data/         # Static/mock data (data.js)
│   │   ├── index.css
│   │   └── index.js
│   ├── public/
│   └── build/
│
└── frontend/           # React app for the public-facing landing website
    └── src/
        └── landing_page/
            ├── about/      # AboutPage.js, Hero.js, Team.js
            ├── home/        # HomePage.js, Hero.js, Awards.js, Education.js, Pricing.js
            ├── pricing/     # PricingPage.js, Brokerage.js, Hero.js
            ├── products/    # ProductsPage.js, LeftSection.js, RightSection.js, Universe.js, Hero.js
            ├── support/     # CreateTicket.js, Hero.js
            ├── Login.js / Login.css
            ├── Signup.js / Signup.css
            └── index.js
```

## Tech Stack

- **Frontend & Dashboard:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose schemas/models)
- **Authentication:** Custom auth middleware & controller (JWT-based, typical for this kind of clone)

## Features

- **Landing Website** – Home, About, Products, Pricing, and Support pages, plus Login/Signup flows.
- **Trading Dashboard** – Portfolio summary, Holdings, Positions, Orders, Watchlist, Funds, and a Buy action window, with charts (Doughnut chart, vertical graph) for visualizing data.
- **Backend API** – Handles authentication and serves Holdings, Orders, and Positions data to the dashboard.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud, e.g. MongoDB Atlas)

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the required variables, for example:

```
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

### 2. Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Folder Notes

- The `backend` folder contains two model-related directories (`model` and `Models`) — you may want to consolidate these for consistency.
- `node_modules` and `build` folders are excluded from version control via `.gitignore` and should be generated locally with `npm install` / `npm run build`.

## License

This project is for educational purposes only and is not affiliated with or endorsed by Zerodha.

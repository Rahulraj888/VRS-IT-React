# VRS IT React Frontend

React-based frontend for the **VRS IT** platform, designed for an IT rentals / e‑commerce experience.  
Connects to the VRS IT Backend API to display products, manage carts, and place orders.

## Features
- Product listing page with images, specs, and pricing
- Product details view
- Add to cart / remove from cart
- Checkout process integrated with backend orders API
- User authentication (login/register)
- Responsive UI with Bootstrap styling
- API integration via Axios

## Tech Stack
- React (Create React App / Vite if configured)
- React Router for navigation
- Axios for API calls
- Bootstrap / React-Bootstrap for UI
- Context API or Redux for state management (depending on code)

## Project Structure
```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level components (Home, ProductDetails, Cart, etc.)
├── services/         # API wrappers
├── App.js
├── index.js
└── styles/
```

## Setup
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd VRS-IT-React-main
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create `.env` file**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. **Run the app**
   ```bash
   npm start
   ```
   App runs at [http://localhost:3000](http://localhost:3000)

## Scripts
- `npm start` – start development server
- `npm run build` – build production bundle
- `npm test` – run tests (if configured)

## API Integration
The app expects a backend running at `REACT_APP_API_URL` (default: http://localhost:5000/api).  
It consumes endpoints for:
- `GET /products`
- `POST /auth/login`
- `POST /auth/register`
- `POST /orders`
- `GET /orders`

## Notes
- Ensure the backend is running before starting the frontend.
- Update `.env` for different environments (dev, staging, prod).

## License
MIT

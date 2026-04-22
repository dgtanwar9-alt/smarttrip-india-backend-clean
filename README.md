# Smart Trip India - Clean Backend

A robust, production-ready backend for the Smart Trip India travel website built with Node.js, Express, and MongoDB.

## Features
*   **Health Check**: `/api/health`
*   **Contact Form & Newsletter**: Public submission endpoints and private admin viewing endpoints.
*   **Trip Planner**: Save customized trip itineraries.
*   **Travel Data APIs**: Full CRUD operations for Hotels, Restaurants, Places (Hidden Gems), and Packages.
*   **Global Search**: Search across all travel entities.
*   **Admin Dashboard & Authentication**: JWT-secured endpoints for dashboard statistics and data management.

## Getting Started

### Prerequisites
*   Node.js (v18+ recommended)
*   MongoDB Atlas Account (or local MongoDB)

### Installation

1.  Clone or copy this folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Rename `.env.example` to `.env` and fill in your variables:
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `JWT_SECRET`: A strong secret key for token generation.
    *   `CORS_ORIGIN`: Your frontend URL (e.g., `https://my-frontend.com`) for production, or `*` for testing.

### Running the Server

*   **Development mode** (with auto-reload):
    ```bash
    npm run dev
    ```
*   **Production mode**:
    ```bash
    npm start
    ```

---

## Deployment Steps

This application is completely ready for deployment to any modern Node.js hosting provider.

### 1. Deploying to Render
1. Create a new "Web Service" on [Render.com](https://render.com).
2. Connect your GitHub repository containing this backend code.
3. Configure settings:
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
4. Add your Environment Variables (`MONGO_URI`, `JWT_SECRET`, `CORS_ORIGIN`, etc.) in the Render dashboard.
5. Click **Deploy**.

### 2. Deploying to Railway
1. Go to [Railway.app](https://railway.app) and create a new project.
2. Select "Deploy from GitHub repo" and choose your backend repository.
3. Railway will automatically detect Node.js and build the app.
4. Go to the Variables tab and add your `.env` variables (`MONGO_URI`, `JWT_SECRET`, etc.).
5. Generate a domain in the settings tab to access your API.

### 3. Deploying to Vercel (as Serverless Functions)
*Note: While Vercel is primarily for frontends and serverless functions, you can host Express apps with a `vercel.json` config.*
1. Add a `vercel.json` file to your root directory:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```
2. Push your code to GitHub.
3. Import the project into Vercel.
4. Add Environment Variables in the Vercel project settings.
5. Deploy.

---

## Postman / API Testing

To test the secured admin routes:
1. Temporarily remove the `protect` middleware from `router.post('/register', protect, registerAdmin);` in `routes/adminRoutes.js`.
2. Send a `POST` request to `/api/admin/register` with `{"username": "admin", "password": "password"}`.
3. Put the `protect` middleware back.
4. Use the `POST /api/admin/login` endpoint to get your `token`.
5. For all private routes, include the token in your headers:
   * Key: `Authorization`
   * Value: `Bearer <YOUR_TOKEN>`

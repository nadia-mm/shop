# Shop Management App

## Overview

The **Shop Management App** is a full-stack web application designed for managing products, and categories. It offers intuitive manual data entry, and API-backed operations for a seamless management experience.

## Todo(later)
- adding a shopping cart
- improve the presentation
- adding the internalization (i18n)
- improve snackbar and unit tests related to axios

## Features

### Product and Category Management
- **View All Products and Categories**: Access comprehensive lists via the API.
- **Create Products**: Add new products with details including category, image URL, price, and quantity.
- **Get/Update/Delete Products**: Retrieve, edit or remove existing products by ID.

## Technology Stack

- **Frontend**: React, Vite, Material-UI
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **State Management**: React Query
- **API Documentation**: Swagger (OpenAPI 3.0)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- MongoDB (local or cloud instance)

There are two ways to run the app:
- with Docker
- with Node

## Doker Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   git clone https://github.com/nadia-mm/shop.git
   cd shop
   docker-compose up --build
   ```

2. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000`.

3. **Access the Swagger document**:
   Open your web browser and navigate to `http://localhost:8080/api-docs`.


### Node Setup

1. **Navigate to the Backend Directory**:
   ```bash
   git clone https://github.com/nadia-mm/shop.git
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env`(already done) file in the `backend` directory with your MongoDB connection string:
   ```plaintext
   MONGO_URI=<MONGO_URI>
   PORT=5000
   ```

4. **Run the Backend**:
   ```bash
   npm run dev
   ```

5. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

6. **Install Dependencies**:
   ```bash
   npm install
   ```

7. **Run the Frontend**:
   ```bash
   npm start
   ```

8. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000`.
   
9. **Access the Swagger document**:
   Open your web browser and navigate to `http://localhost:5000/api-docs`.

## Testing

For unit tests, you can run unit tests:

```bash
npm test
```


For e2e testing, you can run cypress after running the app:

```bash
npx cypress open
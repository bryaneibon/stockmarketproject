# Stock Market Project

This project provides real-time stock market data through the Alpha Vantage API. It allows users to search for a stock symbol and retrieve daily market data including the open, high, low, close, and volume for the most recent trading day.

The application is built using **Node.js**, **Express**, and **EJS** for templating.

## Features

- View stock market data for a given symbol (e.g., IBM, AAPL).
- Display the most recent stock trading data (open, high, low, close, and volume).
- Error handling for invalid or unavailable data.
- Handles API rate limit errors and displays relevant messages.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js** (version 16 or later)
  - You can install it from [here](https://nodejs.org/)
- **npm** (Node Package Manager), which comes with Node.js.
- **nodemon** for development to automatically restart the server on code changes.
  - Install it globally with:
    ```bash
    npm install -g nodemon
    ```

You will also need an API key from Alpha Vantage to access the stock market data.

## Setup and Running the Project

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/bryaneibon/stockmarketproject.git
cd stockmarketproject
```

### 2. Install Dependencies
```bash
npm install
```

You will also need to install nodemon to run the app in development mode and automatically reload it when changes are made:
```bash
npm install --save-dev nodemon
```
### 3. Get an Alpha Vantage API Key
Go to Alpha Vantage Website and sign up for a free API key.

#### Once you have your API key, create a .env file in the root directory of your project and add the following line:
```bash
API_KEY=your_alpha_vantage_api_key
```

### 3. Run the Application
```bash
nodemon app.js
```
### 4. Usage
Open your web browser and navigate to http://localhost:3000
On the home page, you can input a stock symbol (e.g., IBM, AAPL) in the URL query parameter like this:
http://localhost:3000/market?symbol=IBM
The page will show the most recent trading data for that stock symbol (if available).

### 5. Project Structure
```bash
/stockmarketproject
  ├── /public                # Static assets (CSS, images, etc.)
  ├── /routes                # Contains route definitions
      └── market.js          # Handles the market data routes
  ├── /views                 # EJS templates for rendering HTML
      └── index.ejs          # Main view
  ├── .gitignore             # Git ignore file
  ├── .env                   # Environment variables (API key)
  ├── package.json           # Project dependencies and scripts
  └── app.js                 # Main server entry point (app.js)
```
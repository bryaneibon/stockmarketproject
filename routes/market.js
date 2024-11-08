import express from 'express';
import axios from 'axios';

const router = express.Router();

const baseUrl = "https://www.alphavantage.co/query";
// Free API key generated on Alpha Vantage website (25 daily requests)
const API_KEY = process.env.API_KEY;

// Route to get Market Data
router.get('/', async (req, res) => {
    const { symbol } = req.query;
    
    try {
        const response = await axios.get(baseUrl, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: symbol,
                apikey: API_KEY
            }
        });

        // Check if the response contains the rate limit error message
        if (response.data['Information'] && response.data['Information'].includes('Thank you for using Alpha Vantage')) {
            res.render('index', { stockData: null, error: "API rate limit reached (25 Daily Request). Please try again later." });
            return;
        }

        // daily data
        const timeSeriesData = response.data['Time Series (Daily)'];

        if (timeSeriesData) {
            // Only get the most recent date
            const latestDate = Object.keys(timeSeriesData)[0];
            const latestData = timeSeriesData[latestDate];

            console.log(latestData);

            // data we want to see on the view (index.ejs)
            const stockData = {
                symbol: symbol,
                date: latestDate,
                open: latestData['1. open'],
                high: latestData['2. high'],
                low: latestData['3. low'],
                close: latestData['4. close'],
                volume: latestData['5. volume']
            };

            res.render('index', { stockData, error: null });
        } else {
            res.render('index', { stockData: null, error: `Data unavailable for the Symbol ${symbol}` });
        }
    } catch (error) {
        console.error("Error while calling the API", error);
        res.render('index', { stockData: null, error: "Unable to fetch data." });
    }
});

export default router;

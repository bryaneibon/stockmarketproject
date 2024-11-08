import express from "express";
import 'dotenv/config';
import marketRoutes from "./routes/market.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

// Route Home Page
app.get('/', (req, res) => {
    res.render('index', { stockData: null, error: null });
});

// Market routes
app.use('/market', marketRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

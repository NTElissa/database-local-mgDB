// server.js
import express from 'express';
import connectDB from './app.js';
import productRouter from './routes/productRouter.js';

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Use the product routes
app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

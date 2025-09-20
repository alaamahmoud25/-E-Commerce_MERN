import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
import { seedInitialProducts } from './services/productService.js';

const app = express();
const port = 3001;

app.use(express.json());
// Seed the products to database
seedInitialProducts();
mongoose
  .connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log('Mongo connected!'))
  .catch((err) => console.log('Failed to connect!', err));



app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});

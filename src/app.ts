import express from 'express';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(ProductRoutes);
app.use(UserRoutes);
export default app;

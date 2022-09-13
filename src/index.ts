import app from './app';
// import ProductRoutes from './routes/product.routes';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

// app.use(ProductRoutes);

export default server;

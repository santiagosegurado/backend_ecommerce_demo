import express from "express";
import { authRouter } from "./routes/auth.routes";
import { productRouter } from "./routes/products.routes";
import { userRouter } from "./routes/user.routes";

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/', express.static('public'))
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

export default app;

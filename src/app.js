import express from "express";
import { authRouter } from "./routes/auth.routes";

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/', express.static('public'))
app.use('/api/auth', authRouter);

export default app;

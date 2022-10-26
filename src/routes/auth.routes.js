import { Router } from "express";
import { Login, newUser, renewToken } from "../controllers/auth.controller";
import { check } from 'express-validator';

const authRouter = Router();

authRouter.post("/new",[
  check("name", "El nombre no esta incluido").not().isEmpty()
], newUser);

authRouter.post("/", Login);

authRouter.get("/rewnew", renewToken);


export { authRouter };

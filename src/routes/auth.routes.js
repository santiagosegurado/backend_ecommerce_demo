import { Router } from "express";
import { Login, newUser } from "../controllers/auth.controller";
import { check } from "express-validator";

const authRouter = Router();

authRouter.post(
  "/new",
  [
    check("firts_name")
      .isLength({ min: 2 })
      .withMessage("El nombre debe tener al menos 2 caracteres")
      .isLength({ max: 254 })
      .withMessage("El nombre sobrepaso los limites de caracteres"),
    check("last_name")
      .isLength({ min: 2 })
      .withMessage("El apellido debe tener al menos 2 caracteres")
      .isLength({ max: 254 })
      .withMessage("El apellido sobrepaso los limites de caracteres"),
    check("user_name")
      .isLength({ min: 2 })
      .withMessage("El nombre de usuario debe tener al menos 2 caracteres")
      .isLength({ max: 254 })
      .withMessage("El nombre de usuario sobrepaso los limites de caracteres"),
    check("email")
      .isEmail()
      .withMessage("Ingrese un correo electronico valido"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  newUser
);

authRouter.post(
  "/",
  [
    check("email")
      .isEmail()
      .withMessage("Ingrese un correo electronico valido"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  Login
);


export { authRouter };

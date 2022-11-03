import { validationResult } from "express-validator";
import { User } from "../models/Users";
import CryptoJs from "crypto-js";
import jwt from 'jsonwebtoken';

// Crear Usuario
export const newUser = async (req, res) => {
  const { firts_name, last_name, user_name, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.mapped());
  }

  // Hash del password
  const passwordHash = CryptoJs.AES.encrypt(password, "Salta2578").toString();

  try {
    const newUser = await User.create({
      firts_name,
      last_name,
      user_name,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      newUser,
      msg: "Usuario Creado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "Algo fallo en la Base de Datos",
    });
  }
};

// Logearse
export const Login = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.mapped());
  }

  try {
    const userFinded = await User.findOne({
      where: {
        email,
      },
    });

    // Si el usuario no existe que termine ahi
    if (!userFinded) {
      return res.status(401).json({
        msg: "Correo o contraseña incorrectos",
      });
    }
    // Deshasheo la contraseña
    const passwordDehash = CryptoJs.AES.decrypt(
      userFinded.password,
      "Salta2578"
    ).toString(CryptoJs.enc.Utf8);

    // Comparo con la queme me manda el Cliente
    if (passwordDehash !== password) {
      return res.status(401).json({
        msg: "Correo o contraseña incorrectos :(",
      });
    }

    // JWT
    const accesToken = jwt.sign({
      id: userFinded.id,
      isAdmin: userFinded.isAdmin,
    }, "Salta2578"); 

    // Si todo esta bien
    res.status(201).json({
      user: {
        id: userFinded.id,
        firts_name: userFinded.firts_name,
        last_name: userFinded.last_name,
        user_name: userFinded.user_name,
        email: userFinded.email,
        isAdmin: userFinded.isAdmin,
      },
      accesToken,
      msg: "Usuario Logeado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "Error en base de Datos",
    });
  }
};



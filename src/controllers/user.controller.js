import CryptoJs from "crypto-js";
import { User } from "../models/Users";

// Update
export const modificarUsuario = async (req, res) => {
  // Encripto el password
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      "Salta2578"
    ).toString();
  }

  try {
    // Actualizar
    const userUpdated = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!userUpdated) {
      return res.status(404).json({
        msg: "No se pudo Actualizar el usuario",
      });
    }

    res.status(201).json({
      msg: "Usuario Actualiado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "No se pudo Actualizar",
    });
  }
};

//Delete
export const deletearUsuario = async (req, res) => {
  try {
    const userDeleted = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userDeleted) {
      return res.status(404).json({
        msg: "No se pudo Eliminar el usuario",
      });
    }

    res.status(201).json({
      msg: "Usuario Eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "No se pudo Eliminar",
    });
  }
};

// Obtener todos los usuarios
export const getUserById = async (req, res) => {

  try {
    
    const userFinded = await User.findByPk(req.params.id);

    if (!userFinded) {
      return res.status(404).json({
        msg: "No se encontro el usuario",
      });
    }

    res.status(201).json(userFinded);

  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "No se pudo Obtener el usuario",
    });
  }
};

// Obtener todos
export const getUsers = async (req, res) => {

  try {
    
    const usersFinded = await User.findAll();

    if (!usersFinded) {
      return res.status(404).json({
        msg: "No se encontro usuarios",
      });
    }

    res.status(201).json(usersFinded);

  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "No se pudo Obtener usuarios",
    });
  }
};



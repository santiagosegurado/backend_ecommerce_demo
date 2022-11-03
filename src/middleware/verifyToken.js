import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  // Verifico si el token viene en en header
  if (token) {
    jwt.verify(token, "Salta2578", (error, user) => {
      // SI hay un error
      if (error) {
        return res.status(401).json({
          msg: "Token No Valido",
        });
      }

      // SI sale todo bien
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      msg: "No esta Autenticado",
    });
  }
};


// Pregunto si el que quiere modicar el usuario es el mismo o es el admin, ese esos casos puedo proceder
export const verifyTokenAndAuth = (req, res, next) => {

  verifyToken(req, res, () => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
      next();
    }else{
      res.status(403).json({
        msg: 'No estas autorizado'
      })
    }
  })
}

// Verficar si es admin (Solo el admin puede hacer CRUD de los Productos)
export const verifyTokenAndAdmin = (req, res, next) => {

  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    }else{
      res.status(403).json({
        msg: 'No estas autorizado'
      })
    }
  })
}
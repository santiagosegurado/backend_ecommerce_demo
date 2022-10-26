import { validationResult } from 'express-validator'


export const newUser = (req, res)=>{

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.mapped())
  }

  res.json({
    status: 200,
    path: '/new',
    msg: 'register',
    saludo: req.body
  })
}


export const Login = (req, res)=>{

  res.json({
    msg: 'ok',
    path: '/',
    msg: 'login',
  })
}


export const renewToken = (req, res)=>{

  res.json({
    msg: 'ok',
    path: '/renew',
    msg: 'renewtoken',
  })
}
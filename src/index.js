import app from "./app";
import { sequelize } from "./db";
import { config } from "dotenv";
config();


app.listen(process.env.LOCALPORT || process.env.PORT, async () => {
  await sequelize.sync({ force: true });
  console.log(`Escuchando en el puerto ${process.env.LOCALPORT || process.env.PORT} `);
});

import express from "express";
import cors from 'cors';
import { config } from "dotenv";

config();

//importamos la conexion a la base de datos
import db from "./database/db.js";

//importamos a nuestro enrutados
import blogRoutes from "./routes/routes.js";

const app = express();

//settings
app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

//definimos nuestra conexion
try {
    await db.authenticate();
    console.log('conexion exitosa a la base de datos');
} catch (error) {
    console.log(`el error de la conexion es ${error}`);
}

app.get('/', (req, res) => {
    res. send('hola mundo');
});

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
});
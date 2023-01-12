import express from "express";
import cors from 'cors';

import { PORT } from "./config.js";

//importamos la conexion a la base de datos
import db from "./database/db.js";

//importamos a nuestro enrutados
import blogRoutes from "./routes/routes.js";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updataBlog } from "./controllers/BlogController.js";

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

app.get('/', getAllBlogs);
app.get('/', (req, res) => {
    res. send('hola mundo');
});
app.get('/:id', getBlog);
app.post('/', createBlog);
app.put('/:id', updataBlog);
app.delete('/:id', deleteBlog);

app.listen(PORT, () => {
    console.log(`Server on port 4000`);
});
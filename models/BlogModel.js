//importamos la conexion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogss', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
});

export default BlogModel;


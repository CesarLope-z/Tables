import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Cuadro = db.define('table', {
    name: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.NUMBER
    },
    color: {
        type: Sequelize.STRING
    },
    columnas: {
        type: Sequelize.NUMBER
    },
    filas: {
        type: Sequelize.NUMBER
    }
})
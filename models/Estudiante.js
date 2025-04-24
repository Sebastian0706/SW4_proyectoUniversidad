const { Datatypes } = require('sequelize');
const db = require('../config/database');
const { name } = require('ejs');
const { default: isEmail } = require('validator/lib/isEmail');

class Estudiante {

    static async obtenerTodosLosEstudiantes() {
        try {
            const [Estudiantes] = await db.query('SELECT * FROM estudiantes');
            return Estudiantes;

        } catch (error) {
            console.error("Error al obetener infromacion de los estudiantes", error);
            throw error;
        }

    }

    static async obtenerEstudiantesPorID(id) {
        try {
            const [Estudiantes] = await db.query('SELECT * FROM estudiantes WHERE id = ?', [id]);
            return Estudiantes[0];

        } catch (error) {
            console.error("Error al obetener infromacion del estudiante por id: ", error);
            throw error;
        }

    }
}
/*
const estudiante = db.define('estudiante', {

    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    lastName: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    matricula: {
        type: Datatypes.BOOLEAN,
        allowNull: false
    }


}, {
    tablename: 'Estudiante',
    timestamps: false
})
*/
module.exports = Estudiante;


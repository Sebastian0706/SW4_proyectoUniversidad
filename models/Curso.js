const db = require('../config/database');

class Curso {

    static async obtenerTodosLosCursos() {
        try {
            const [Cursos] = await db.query('SELECT * FROM cursos');
            return Cursos;

        } catch (error) {
            console.error("Error al obetener infromacion de los cursos", error);
            throw error;
        }
    }

    static async obtenerCursosPorID(id) {
        try {
            const [Cursos] = await db.query('SELECT * FROM cursos WHERE id = ?', [id]);
            return Cursos[0];

        } catch (error) {
            console.error("Error al obetener infromacion del curso por id: ", error);
            throw error;
        }

    }
}

module.exports = Curso;

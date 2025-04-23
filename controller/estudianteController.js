const { render } = require('ejs');
const db = require('../config/database');

exports.listarEstudiantes = async (req, res) => {
    try {
        const { estudiantes } = await db.query('SELECT * from estudiantes');
        res.render('estudiantes/index', { estudiantes });


    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los estudiantes');

    }
};

exports.formsEstudiante = async (req, res) => {
    res.render('estudiantes/form');

}

exports.crearEstudiantes = async (req, res) => {
    const { nombre, apellido, email } = req.body;
    try {
        await db.query('INSERT INTO estudiantes (nombre, apellido, email) VALUES (?,?,?)', { nombre, apellido, email });
        res.redirect('/estudiantes');

    } catch (error) {
        console.error(error);
        res.estatus(500).send('Error al crear estudiantes en la base de datos')

    }
}
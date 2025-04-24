const { render } = require('ejs');
const db = require('../config/database');

exports.listarCursos = async (req, res) => {
    try {
        const { cursos } = await db.query('SELECT * from cursos');
        res.render('cursos/index', { cursos });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los cursos');

    }
};

exports.formsCurso = async (req, res) => {
    res.render('cursos/form');
};

exports.crearCursos = async (req, res) => {
    const { } = req.body;
    try {

        res.redirect('/cursos')

    } catch (error) {
        console.error(error);
        res.estatus(500).send('Error al crear cursos en la base de datos')

    }

}
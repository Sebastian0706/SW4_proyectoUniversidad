const express = require('esxpress');
const router = express.router();
const CursosController = require('../controller/cursoController')

router.get('/', CursosController.listarCursos);
router.post('/', CursosController.crearCursos);

module.exports = router;
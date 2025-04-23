const express = require('esxpress');
const router = express.router();
const EstudianteController = require('../controller/estudianteController')

router.get('/', EstudianteController.listarEstudiantes);
router.post('/', EstudianteController.crearEstudiantes);

module.exports = router;
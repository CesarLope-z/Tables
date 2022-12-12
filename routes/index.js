import express from "express";
import { paginaInicio, agregarCuadro, detalleCuadro } from '../controllers/paginasAll.js'
import { guardarCuadro } from '../controllers/crearTabla.js';
import { guardarDatos } from '../controllers/almacenarDatos.js';

const router = express.Router();
router.get('/', paginaInicio);
router.get('/add', agregarCuadro);
router.post('/add', guardarCuadro);
// router.post('/cuadroType1', guardarDatos)
router.get('/inicio/:id', detalleCuadro)
router.post('/inicio/:id', guardarDatos)
export default router
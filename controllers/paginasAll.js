import { Cuadro } from "../models/Cuadro.js"

const paginaInicio = async (req, res) => {
    const cuadros = await Cuadro.findAll();
    res.render('inicio', {
        pagina: 'Inicio',
        cuadros
    });
}
const agregarCuadro = (req, res) => {
    res.render('add', {
        pagina: 'Agregando'
    });
}
const detalleCuadro = async (req, res) => {
    const { id } = req.params;
    try {
        const cuadro = await Cuadro.findOne({ where : { id }})
        res.render('cuadroType1', {
            cuadro
        })
    } catch (error) {
        console.log(error)
    }

}

export {
    paginaInicio,
    agregarCuadro,
    detalleCuadro
}
import { Cuadro } from '../models/Cuadro.js';

const guardarCuadro = async (req, res) => {
    const {name, icono, color, columnas, filas} = req.body;
    const errores = [];
    let cuadros = [];
    if(icono === '' || icono === undefined){
        errores.push({mensaje: 'Elige un tipo de Tabla'})
    }
    if(color === ''){
        errores.push({mensaje: 'Elige un color'})
    }
    if(name === ''){
        errores.push({mensaje: 'El cuadro debe poseer un titulo'})
    }
    if(columnas === ''){
        errores.push({mensaje: 'Elige las columnas a crear'})
    }
    if(filas === ''){
        errores.push({mensaje: 'Elige las filas a crear'})
    }
    console.log(errores);

    if(errores.length > 0){
        res.render('add', {
            pagina: 'Agregar',
            name,
            icono,
            color,
            columnas,
            filas,
            errores
        });
    }else{

        try {
            await Cuadro.create({
                name,
                type: Number(icono),
                color,
                columnas: Number(columnas),
                filas: Number(filas)
            })
            res.redirect('/')
            

        } catch (error) {
            console.log(error)
        }
    }
}
export {
    guardarCuadro
}
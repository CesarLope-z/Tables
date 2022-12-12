// import { Datos } from '../models/Datos.js';

const guardarDatos = (req, res) => {
    const { colm, rows, nombreTabla } = req.body;
    console.log(colm, rows, nombreTabla)
    colm.toString()
    rows.toString()
    
    for (let i = colm; i > 0; i--) {
        for (let h = rows; h > 0; h--){
            const data = "to" + i.toString() + h.toString() + "Data";
            const value = req.body
            console.log(value.data)
        }
    }
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

}
export {
    guardarDatos
}
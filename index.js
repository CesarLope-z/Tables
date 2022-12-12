import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'


const app = express();

db.authenticate()
    .then(() => console.log(`Database >> ${process.env.DB_NAME} >> Correctly connection`))
    .catch( error => console.log(error))

const puerto = process.env.PORT || 4000;

app.set('view engine', 'pug')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/', router)
app.listen(puerto, () => {
    console.log(`Server connected on >> ${puerto}`);
})
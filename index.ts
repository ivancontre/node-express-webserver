import express, { Application } from 'express';
import hbs from 'hbs';
import 'dotenv/config';

// Crear el server de express
const app: Application = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Directorio público
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Iván Contreras',
        title: 'Curso de NodeJS'
    });
});

app.get('*', (req, res) => {
    //res.sendFile(__dirname + '/public/404.html');
    res.sendFile('public/404.html', {root: __dirname })
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
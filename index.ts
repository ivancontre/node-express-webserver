import express, { Application } from 'express';
import 'dotenv/config';

// Crear el server de express
const app: Application = express();

// Directorio público
app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
    //res.sendFile(__dirname + '/public/404.html');
    res.sendFile('public/404.html', {root: __dirname })
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
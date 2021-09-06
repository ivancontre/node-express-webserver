import express, { Application } from 'express';
import 'dotenv/config';

// Crear el server de express
const app: Application = express();

// Directorio público
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname })
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
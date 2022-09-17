import app from './app.js';

const port = process.env.PORT_APP || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta:${port}`)
})
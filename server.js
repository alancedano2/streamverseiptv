const express = require('express');
const app = express();

app.get('/mi-lista.m3u', (req, res) => {
    res.sendFile(__dirname + '/mi-lista.m3u');
});

app.get('/mi-guia.xml', (req, res) => {
    res.sendFile(__dirname + '/mi-guia.xml');
});

app.listen(3000, () => console.log('Servidor corriendo en localhost:3000'));

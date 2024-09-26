const express = require('express')
const colecao = require('./dados/colecao.js')

const app= express;

app.get('/gg', (req, res) => {
    res.json(colecao.colecpessoas);
});
import express from "express";

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {nome: 'matheus', idade: 19},
    {nome: 'Tude', idade: 18},
    {nome: 'Lucas', idade: 18},
    {nome: 'Enzo', idade: 16}
  ])
})

app.listen(3333)
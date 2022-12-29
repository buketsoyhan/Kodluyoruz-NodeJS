const express = require('express');

const app= express()

app.get('/', (req,res)=>{
    res.status(200).send('hello')
})
app.get('/about', (req,res)=>{
    res.status(200).send('About Page')
})
app.get('/contact', (req,res)=>{
    res.status(200).send('Contact Page')
})
app.get('*', (req,res)=>{
    res.status(404).send('404 not found')
})
app.listen(3000)
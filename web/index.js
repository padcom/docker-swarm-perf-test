#!/usr/bin/env node

const express = require('express')
const app = express()

const id = Math.floor(Math.random() * 1000)

app.get('/', (req, res) => {
  res.end('Hello, world! process=' + id)
})

app.listen(5001, () => {
  console.log('Server running on port 5001, process=', id)
})

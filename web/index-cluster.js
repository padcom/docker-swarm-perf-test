#!/usr/bin/env node

const express = require('express')
const cluster = require("cluster")
const totalCPUs = require("os").cpus().length


if (cluster.isMaster) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
  })
} else {
  const app = express()

  const id = Math.floor(Math.random() * 1000)

  app.get('/', (req, res) => {
    res.end('Hello, world! process=' + id)
  })

  app.listen(5001, () => {
    console.log('Server running on port 5001, process=', id)
  })
}

const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const mongodbLink = require('./config/mongodb')
const { Nuxt, Builder } = require('nuxt')
const api = require('./router/index')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3302
const formatRes = require('./units/formatRes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({
  secret: 'feng',
  resave: false,
  cookie: { secure: true },
  saveUninitialized: false
}))
app.set('port', port)
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const DB = mongoose.connection;
  mongoose.connect(mongodbLink, {
    useNewUrlParser: true
  });
  
  DB.on('error', console.error.bind(console, 'connection error:'));
  DB.once('open', function() {
    // we're connected!
    console.log('mongoose success')
  });
  
  
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  
  app.use(api)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

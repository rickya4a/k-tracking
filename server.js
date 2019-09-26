const app = require('express')(),
  path = require('path'),
  port = process.env.PORT || 5000,
  serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"))
app.listen(port)

console.log(`Server is running`)

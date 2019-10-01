const app = require('express')(),
  path = require('path'),
  port = process.env.PORT || 5000,
  serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"))
app.route('/*')
  .get((req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
  })
app.listen(port)

console.log(`Server is running`)

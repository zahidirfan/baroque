const app = require('./app');

var chokidar = require('chokidar')
var watcher = chokidar.watch('./app')
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /app/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports=app;

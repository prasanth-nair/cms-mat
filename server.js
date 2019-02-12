const http = require('http');
const app = require('./Backend/app');
const debug = require('debug')('test-node-server')

const port = process.env.PORT || 3000;

app.set('port', port)



const server = http.createServer(app);


server.listen(port, () => console.log(`Example app listening on port ${port}!`))

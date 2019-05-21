const http = require('http');
const app = require('./app/app');

const PORT = 3000;

const server = http.createServer(app);
server.on("listening", ()=> {
    console.log("Server started listening on http://localhost:3000");
})
server.listen(PORT);
const server = require('./app')
const morgan = require('morgan');
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

//TODO_________________________________________________________________________________________________________________________

// const http = require("http");
// // const data = require("./Utils/data")
// const getCharById  = require('./Controllers/getCharById')

// http.createServer((request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');

//     const { url } = request;

//     if (url.includes("/rickandmorty/character/")) {
//         const id = url.split('/').at(-1)
//         getCharById(response, id)
//     }
// }).listen(3001, 'localhost');
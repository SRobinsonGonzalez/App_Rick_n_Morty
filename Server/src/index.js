const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./Routes/index,js');
const morgan = require('morgan')
// const getCharById = require('./Controllers/getCharById')

server.use(express.json());
server.use(morgan('dev'))

server.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
})

server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});









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
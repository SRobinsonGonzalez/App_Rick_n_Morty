const http = require("http");
const data = require("./Utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = request;
    console.log(url);

    if (url.includes("/rickandmorty/character"));
    const id = url.split('/').at(-1);
    const characters = data.find((character) => character.id == id);
    
    if (characters) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(characters));
    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify({error: 'Character not found'}));
    }
}).listen(3001, 'localhost');

/*
Rutas
rickandmorty/character/id
*/
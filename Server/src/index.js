const server = require('./app')
const morgan = require('morgan');
const { conn } = require('./DB_connection')

server.listen(3001, () => {
    conn.sync({ alter: true })
    console.log('Server raised in port', 3001);
});
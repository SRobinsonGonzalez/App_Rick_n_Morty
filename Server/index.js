const server = require("./src/server");
const { db } = require("./src/db");

db.once("open", () => { // ".once" metodo para escuchar una sola vez el evento "open"
  server.listen(3001, () => {
    console.log("Listening at", 3001);
  });
});
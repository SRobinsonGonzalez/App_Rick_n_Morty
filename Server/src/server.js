const express = require("express");
const server = express();
const router = require("./Routes/index");
const morgan = require("morgan"); // Middleware para realizar registro de las solicitudes HTTP.
const bodyParser = require("body-parser"); // Middleware para analizar el cuerpo de las solicitudes HTTP.
const multer = require("multer"); // Middleware para el manejo de archivos multipart/form-data.
const path = require("path"); // Modulo para manejar rutas de archivos y directorios.

const dotenv = require("dotenv");
dotenv.config() // Configura las variables de entorno.

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

server.use(bodyParser.json());
server.use(express.raw()); // Middleware para manejar cuerpos de solicitud en formato raw (sin procesar o binario(imagenes o archivos de audio)).
server.use(morgan("dev"));
server.use(express.json()); // Middleware para analizar datos JSON en las solicitudes HTTP.

server.use((req, res, next) => { // Middleware para manejar el CORS
  res.header("Access-Control-Allow-Origin", "*"); // "*" permite solicitudes desde cualquier origen.
  res.header("Access-Control-Allow-Credentials", true); // "true" se permiten credenciales (como cookies) en las solicitudes. (importante cuando se manejan solicitudes con credenciales desde el lado del cliente).
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Especifica los encabezados permitidos en las solicitudes.
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); // Especifica los metodos HTTP permitidos.
  next();
});

const storage = multer.diskStorage({ // Configura el almacenamiento de archivos en el servidor.
  destination: function (req, file, cb) {
    cb(null, "./Uploads"); // "null" indica que no hay error.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  } // Nombre del campo original, fecha actual, extencion del archivo original (como se debe nombrar y guardar el archivo).
});

const upload = multer({ storage: storage }); // Se configura multer con el almacenamiento definido anteriormente.

server.use(upload.array("images", 5)); // "upload" se convierte en middleware para manejar la subida de archivos.

server.use(async (req, res, next) => { // Middleware que usa una funcion asincronica ejecutandose en cada solicitud para cargar las imagenes a Cloudinary.
  if (req.files) { // Verifica si hay archivos adjuntos en la solicitud.
    try {
      const imagePromises = req.files.map(async file => { // Crea un array de promesas utilizando "map" para iterar sobre los archivos subidos y cargar cada uno a Cloudinary.
        const result = await cloudinary.uploader.upload("Uploads/" + file.fieldname); // Utiliza la biblioteca de Cloudinary para cargar cada archivo a Cloudinary.
        return result.secure_url; // Retorna la variable donde se almacena la URL de la imagen cargada.
      });
      const imagesURL = await Promise.all(imagePromises); // Espera a que todas las promesas se resuelvan "Promise.all" y obtiene un array de URL.
      req.imagesURL = imagesURL; // Agrega las URL de las imagenes al objeto de solicitud "req", lo que permite que otras partes de la aplicacion accedan a las URL.
    } catch (error) {
      console.error("Error uploading images to Cloudinary", error);
      res.status(500).json({ message: "Error loading images" });
    };
  };
  next();
});

server.use(router);

module.exports = server;
// Importando el modulo HTTP
import http from 'http';
// Importando express js
import express from 'express'

// Creando una instancia de express
const app = express();

// Creando servidor HTTP
const server = http.createServer(app);

// Establecer configuraciones del server
const PORT = 3000;
const IP = "0.0.0.0"

// Poniendo a trabajar el servidor
server.listen(PORT, IP, (err)=>{
    // Verificamos si hay error
    if(err) console.log("❌ Error al arrancar el server ☹️");
    // 
    console.log(`🎉 Servidor escuchando en http://localhost:${PORT} 🎉`);
});
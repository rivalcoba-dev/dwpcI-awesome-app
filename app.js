// Importando express js
import express from 'express'

// Creando una instancia de express
const app = express();

// Registrando el primer middleware
app.use( (req, res, next) => {
    console.log("📢 Middleware #1");
    // Pasamos la ejecucion al sig responsable
    next();
} );

app.use((req, res, next) =>{
    console.log("📢 Middleware #2");
    // Contestando al server
    res.send(`
    <h1>Welcome to my first App</h1>
    <p>This is my awesome app!!</p>
    `);
});

// Establecer configuraciones del server
const PORT = 3000;
const IP = "0.0.0.0"

// Poniendo a trabajar el servidor
app.listen(PORT, IP, (err)=>{
    // Verificamos si hay error
    if(err) console.log("❌ Error al arrancar el server ☹️");
    // 
    console.log(`🎉 Servidor escuchando en http://localhost:${PORT} 🎉`);
});
// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';
import { log } from 'console';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Ruta about
// GET /about
app.use('/about',(req, res)=>{
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

// GET '/add-product'
app.use('/add-product', (req, res, next) => {
  // Si la petición es post pasamos el siguiente
  // Middleware
  if(req.method === "POST") return next();

  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.send(`
  <form action="/add-product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add product</button>
  </form>
  `);
});

// POST '/add-product'
app.use('/add-product', (req, res)=>{
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  for(const prop in req){
    console.log(`Prop: ${prop}`);
  }
  return res.redirect('/');
});

// Ruta Raíz
// GET /
app.use((req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  // Se contesta al server
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
  `);
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
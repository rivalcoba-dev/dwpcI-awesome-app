// Importando express js
import express from 'express'

// Creando una instancia de express
const app = express();

// Se registra el middleware body-parser
app.use(express.urlencoded({extended: true}));

// Ruta About
// GET /about
app.use('/about', (req, res) =>{
  console.log("📢 Sirviendo la ruta '/about'");
  // Contestando al server
  res.send(`
  <h1>🪄 About...</h1>
  <p>App for Fullstack Web Dev Course I!</p>
  `)
});

// Recurso que sirve el formulario web
// GET '/add-product'
app.get('/add-product', (req, res, next)=>{
  // Servir el formulario
  console.log('📢 Sirviendo Fomrulario...');
  res.send(`
  <form action="/add-product" method="POST">
    <label>
      Ingresar Nombre
      <input type="text" name="title">
    </label>
    <button type="submit">Add product</button>
  </form>
  `);
});

// POST '/add-product'
app.post('/add-product', (req, res)=>{
  // Realizamos la extracción de
  // los parámetros dentro de la petición
  return res.json(req.body);
  // return res.redirect('/');
});

// Ruta Raiz
// GET /
app.use((req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  // Se contesta al server
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
  `);
})

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
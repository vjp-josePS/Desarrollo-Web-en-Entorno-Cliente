const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/luchadores', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer el archivo db.json');
      return;
    }
    res.send(data);
  });
});

app.put('/luchadores/:nombre', (req, res) => {
  const nombreLuchador = decodeURIComponent(req.params.nombre);
  const nuevosDatos = req.body;

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer el archivo db.json');
      return;
    }

    let luchadores = JSON.parse(data);
    const index = luchadores.luchadores.findIndex(l => l.nombre === nombreLuchador);

    if (index === -1) {
      res.status(404).send('Luchador no encontrado');
      return;
    }

    luchadores.luchadores[index] = {...luchadores.luchadores[index], ...nuevosDatos};

    fs.writeFile('db.json', JSON.stringify(luchadores, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al escribir en el archivo db.json');
        return;
      }
      res.send('Luchador actualizado correctamente');
    });
  });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});

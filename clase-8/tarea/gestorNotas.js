const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  // Si ya existe el archivo, leemos las notas guardadas
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    if(data){
        notas = JSON.parse(data);
    }
  }

  // Añadimos la nueva nota al array de notas
  notas.push({ titulo, contenido });

  // Guardamos las notas actualizadas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    const notas = JSON.parse(data);

    console.log('Notas guardadas:');
    notas.forEach(nota => console.log(`${nota.titulo}: ${nota.contenido}`));
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    let notas = JSON.parse(data);

    // Filtramos las notas para eliminar la que coincida con el título
    notas = notas.filter(nota => nota.titulo !== titulo);

    // Guardamos las notas actualizadas
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();


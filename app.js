const input = document.getElementById('nota-input');
const btn = document.getElementById('guardar-btn');
const container = document.getElementById('notas-container');
const snackbar = document.getElementById('snackbar');

function mostrarSnackbar() {
  snackbar.className = "show";
  setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 2500);
}

function crearNota(texto) {
  const div = document.createElement('div');
  div.className = 'nota';
  div.textContent = texto;
  container.appendChild(div);
}

function guardarNota() {
  const texto = input.value.trim();
  if (!texto) return;

  crearNota(texto);

  let notas = JSON.parse(localStorage.getItem('notas') || '[]');
  notas.push(texto);
  localStorage.setItem('notas', JSON.stringify(notas));

  input.value = '';
  mostrarSnackbar();
}

// Cargar notas guardadas
JSON.parse(localStorage.getItem('notas') || '[]').forEach(crearNota);

btn.addEventListener('click', guardarNota);

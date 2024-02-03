const input = document.getElementById('input');
const boton = document.getElementById('buscar');
const lista = document.getElementById('lista');

const canciones = ['cancion de duki', 'cancion de emilia', 'cancion de tini ', 'otra de duki'];

boton.addEventListener('click', function () {
  // Obtener el valor del input y convertirlo a minúsculas
  const valor = input.value.toLowerCase();

  // Filtrar las canciones que contienen el valor ingresado
  const cancionesQueCumplen = canciones.filter(c => c.toLowerCase().includes(valor));

  // Mostrar las canciones que cumplen en la lista
  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`);

  // Si no se encuentran canciones, mostrar un mensaje
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron canciones</li>';
  }
});

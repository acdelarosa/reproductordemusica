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

class Song{
  constructor(nombre, autor, duración, album, año, género, cover, urlSong) {
    this.nombre=nombre;
  this.autor=autor;
  this.duración=duración;
  this.album=album;
  this.año=año;
  this.género=género;
  this.cover=cover;
  this.urlSong=urlSong;
  }
  
 
  getSongNameAndAlbum() {
    return '${this.nombre} - ${this.autor} - ${this.duracion} - ${this.album}- ${this.genero}- ${this.año}'
      }

  }

class CatalogoDeCAnciones {
  constructor () {
    this.CatalogoDeCAnciones=[
      new Song ("cancion1","autor1", "duracion1", "album1", "genero1", "año1", '.album/1album.jpg','.canciones/1.mp3', )

    ]
  }
}





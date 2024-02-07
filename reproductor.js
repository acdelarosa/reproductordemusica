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

class CatalogoDeCanciones {
  constructor () {
    this.CatalogoDeCanciones=[
     // new Song ("cancion1","autor1", "duracion1", "album1", "genero1", "año1", '.album/1album.jpg','.canciones/1.mp3'), 
     new Song ("Flowers","Miley Cyrus", "3:21", "Endless Summer Vacation", "Pop", "2023", '.album/9album.jpg','.canciones/1.mp3'), 
     new Song ("Yeah!","Usher", "2:41", "Confessions", "Crunk&B", "2004", '.album/10album.jpg','.canciones/2.mp3'),
     new Song ("Deja vu","Prince Royce & Shakira  ", "3:18", "FIVE", "Bachata", "2017", '.album/11album.jpg','.canciones/3.mp3'),
     new Song ("Seven","Jungkook,", "3:24", "Golden", "Pop", "2023", '.album/12album.jpg','.canciones/4.mp3'),
     new Song ("Dangerously","Charlie Puth", "3:22", "Nine Track Mind", "Pop", "2016", '.album/13album.jpg','.canciones/5.mp3'),
     new Song ("Attention","Charlie Puth", "3:32", "Voicenotes", "Pop Rock", "2017", '.album/14album.jpg','.canciones/6.mp3'),
     new Song ("Dreamers","	Jungkook & RedOne", "3:21", "FIFA World Cup 2022", " K-pop, Pop", "2022", '.album/15album.jpg','.canciones/7.mp3'),
     new Song ("Sofía","Alvaro Soler", "3:33", "Eterno agosto", "Pop", "2016", '.album/16album.jpg','.canciones/8.mp3'),
       
     

    ]
  }
}





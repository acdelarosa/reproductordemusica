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

class Song {
  constructor(nombre, autor, duración, album, año, género, cover, urlSong) {
    this.nombre = nombre;
    this.autor = autor;
    this.duracion = duración;
    this.album = album;
    this.año = año;
    this.genero = género;
    this.cover = cover;
    this.urlSong = urlSong;
  }

  getSongNameAndAlbum() {
    return `${this.nombre} - ${this.autor} - ${this.duracion} - ${this.album} - ${this.genero} - ${this.año}`;
  }
}

class CatalogoDeCanciones {
  constructor() {
    this.CatalogoDeCanciones =  [
     // new Song ("cancion1","autor1", "duracion1", "album1", "genero1", "año1", '.album/1album.jpg','.canciones/1.mp3'), 
     new Song ("Flowers","Miley Cyrus", "3:21", "Endless Summer Vacation", "Pop", "2023", '.album/9album.jpg','.canciones/1.mp3'), 
     new Song ("Yeah!","Usher", "2:41", "Confessions", "Crunk&B", "2004", '.album/10album.jpg','.canciones/2.mp3'),
     new Song ("Deja vu","Prince Royce & Shakira  ", "3:18", "FIVE", "Bachata", "2017", '.album/11album.jpg','.canciones/3.mp3'),
     new Song ("Seven","Jungkook,", "3:24", "Golden", "Pop", "2023", '.album/12album.jpg','.canciones/4.mp3'),
     new Song ("Dangerously","Charlie Puth", "3:22", "Nine Track Mind", "Pop", "2016", '.album/13album.jpg','.canciones/5.mp3'),
     new Song ("Attention","Charlie Puth", "3:32", "Voicenotes", "Pop Rock", "2017", '.album/14album.jpg','.canciones/6.mp3'),
     new Song ("Dreamers","	Jungkook & RedOne", "3:21", "FIFA World Cup 2022", " K-pop, Pop", "2022", '.album/15album.jpg','.canciones/7.mp3'),
     new Song ("Sofía","Alvaro Soler", "3:33", "Eterno agosto", "Pop", "2016", '.album/16album.jpg','.canciones/8.mp3'),
     new Song ("Desde Cuando","Alejandro Sanz", "3:57", "Paraiso Express", "Pop", "2009", '.album/17album.jpg','.canciones/9.mp3'), 
     new Song ("La media Vuelta","Luis Miguel", "2:41", "Segundo Romance", "Bolero Ranchero", "1994", '.album/18album.jpg','.canciones/10.mp3'),  
     new Song ("Hasta que me olvides","Luis Miguel", "4:41", "Segundo Romance", "Pop", "1994", '.album/18album.jpg','.canciones/11.mp3'), 
     new Song ("You are not alone","Michael Jackson", "5:45", "HIStory: Past, Present and Future, Book I", "Pop", "1995", '.album/19album.jpg','.canciones/12.mp3'), 
     new Song ("Creo en mi","Natalia Jimenez", "3:48", "Creo en mi", "Pop latino", "2015", '.album/20album.jpg','.canciones/13.mp3'), 
     new Song ("Nunca es suficiente","Angeles azules", "4:26", "aEsto si es cumbia", "Cumbia", "2018", '.album/21album.jpg','.canciones/41.mp3'), 
     new Song ("Don't stop me now","Queen", "3:29", "Jazz", "Pop rock", "1978", '.album/22album.jpg','.canciones/15.mp3'), 
     new Song ("We Will Rock You ","Queen", "2:01", "Jazz", "Pop rock", "1978", '.album/22album.jpg','.canciones/16.mp3'), 
     new Song ("Que se parezca a ti","Tiago PZK", "3:04", "Portales", "Urbano Latino", "2022", '.album/1album.jpg','.canciones/17.mp3'), 
     new Song ("Bemaste","Tiago PZK", "2:21", "Portales", "Urbano Latino", "2022", '.album/1album.jpg','.canciones/18.mp3'), 
     new Song ("Yesterday","The Beatles", "1:59", "Help!", "Chamber Pop", "1965", '.album/2album.jpg','.canciones/19.mp3'),
     new Song ("Mamichula","Nicki Nicole", "3:38", "Atrevido", "Trap Latino", "2020", '.album/3album.jpg','.canciones/20.mp3'), 
     new Song ("Take me to church","Hozier", "4:16", "Take me to church", "Soul", "2014", '.album/4album.jpg','.canciones/21.mp3'),
     new Song ("CNV vol 30","Pure Negga x Rastachai", "4:13", "CNV Vol 30", "Reggae", "2021", '.album/5album.jpg','.canciones/22.mp3'),
     new Song ("Let your hair down","Magic!", "4:28", "Don't Kill the magic", "Pop", "2014", '.album/6album.jpg','.canciones/23.mp3'),
     new Song ("Medicine","The pretty reckless", "3:17", "Make me wanna die", "Hard Rock", "2010", '.album/7album.jpg','.canciones/24.mp3'),
     new Song ("Diamons", "Rihanna", "3:45", "Unapologetic", "Pop", "2012", '.album/25album.jpg','.canciones/25.mp3'),
     new Song ("Viva la vida", "Coldplay","4:01","Viva la vida", "Pop", "2008",'.album/26album.jpg','.canciones/26.mp3'),
     new Song ("Take on me", "A-ha", "4:04", "Hunting high and low", "Alternative", "1985", '.album/27album.jpg','.canciones/27.mp3'),
     new Song ("Dusk till down", "Zayn & Sia", "3:55", "Dusk Till Down", "Pop", "2017",'.album/28album.jpg','.canciones/28.mp3'),
     new Song ("Señorita","Shawn Mendes & Camila Cabello", "3:25", "Latin Pop", "2019", '.album/29album.jpg','.canciones/29.mp3'),
     new Song ("Empire States of Mind", "Alicia Keys", "3:29", "The Element of freedom", "R&B/Soul","2009",'.album/30album.jpg','.canciones/30.mp3')
    ]
    this.mostrarcanciones ();
  
  }
}
  

class PlayList {

}
class Reproductor {

}



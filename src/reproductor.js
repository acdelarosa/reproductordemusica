import {Song} from './song.js';
import {PlayList} from './playlist.js';
import {Favorites} from "./favoritos.js";

class Reproductor {
  CatalogoDeCanciones;
  actualSong;
  audio;
  actualPlaylist;

  constructor() {
    this.favoritos = new Favorites("Mis Favoritos", [], "Aleatorio");

    this.CatalogoDeCanciones = [
      // new Song ("id", cancion1","autor1", "duracion1", "album1", "genero1", "año1", '.album/1album.jpg','.canciones/1.mp3'),
      new Song(1, "Flowers", "Miley Cyrus", "3:21", "Endless Summer Vacation", "Pop", "2023", '9album.jpg', '1.mp3'),
      new Song(2, "Yeah!", "Usher", "2:41", "Confessions", "Crunk&B", "2004", '10album.jpg', '2.mp3'),
      new Song(3, "Deja vu", "Prince Royce & Shakira  ", "3:18", "FIVE", "Bachata", "2017", '11album.jpg', '3.mp3'),
      new Song(4, "Seven", "Jungkook,", "3:24", "Golden", "Pop", "2023", '12album.jpg', '4.mp3'),
      new Song(5, "Dangerously", "Charlie Puth", "3:22", "Nine Track Mind", "Pop", "2016", '13album.jpg', '5.mp3'),
      new Song(6, "Attention", "Charlie Puth", "3:32", "Voicenotes", "Pop Rock", "2017", '14album.jpg', '6.mp3'),
      new Song(7, "Dreamers", "	Jungkook & RedOne", "3:21", "FIFA World Cup 2022", " K-pop, Pop", "2022", '15album.jpg', '7.mp3'),
      new Song(8, "Sofía", "Alvaro Soler", "3:33", "Eterno agosto", "Pop", "2016", '16album.jpg', '8.mp3'),
      new Song(9, "Desde Cuando", "Alejandro Sanz", "3:57", "Paraiso Express", "Pop", "2009", '17album.jpg', '9.mp3'),
      new Song(10, "La media Vuelta", "Luis Miguel", "2:41", "Segundo Romance", "Bolero Ranchero", "1994", '18album.jpg', '10.mp3'),
      new Song(11, "Hasta que me olvides", "Luis Miguel", "4:41", "Segundo Romance", "Pop", "1994", '18album.jpg', '11.mp3'),
      new Song(12, "You are not alone", "Michael Jackson", "5:45", "HIStory: Past, Present and Future, Book I", "Pop", "1995", '19album.jpg', '12.mp3'),
      new Song(13, "Creo en mi", "Natalia Jimenez", "3:48", "Creo en mi", "Pop latino", "2015", '20album.jpg', '13.mp3'),
      new Song(15, "Nunca es suficiente", "Angeles azules", "4:26", "aEsto si es cumbia", "Cumbia", "2018", '21album.jpg', '14.mp3'),
      new Song(16, "Don't stop me now", "Queen", "3:29", "Jazz", "Pop rock", "1978", '22album.jpg', ' 15.mp3'),
      new Song(17, "We Will Rock You ", "Queen", "2:01", "Jazz", "Pop rock", "1978", '22album.jpg', '16.mp3'),
      new Song(18, "Que se parezca a ti", "Tiago PZK", "3:04", "Portales", "Urbano Latino", "2022", '1album.jpg', '17.mp3'),
      new Song(19, "Bemaste", "Tiago PZK", "2:21", "Portales", "Urbano Latino", "2022", '1album.jpg', '18.mp3'),
      new Song(20, "Yesterday", "The Beatles", "1:59", "Help!", "Chamber Pop", "1965", '2album.jpg', '19.mp3'),
      new Song(21, "Mamichula", "Nicki Nicole", "3:38", "Atrevido", "Trap Latino", "2020", '3album.jpg', '20.mp3'),
      new Song(22, "Take me to church", "Hozier", "4:16", "Take me to church", "Soul", "2014", '4album.jpg', '21.mp3'),
      new Song(23, "CNV vol 30", "Pure Negga x Rastachai", "4:13", "CNV Vol 30", "Reggae", "2021", '5album.jpg', '22.mp3'),
      new Song(24, "Let your hair down", "Magic!", "4:28", "Don't Kill the magic", "Pop", "2014", '6album.jpg', '/23.mp3'),
      new Song(25, "Medicine", "The pretty reckless", "3:17", "Make me wanna die", "Hard Rock", "2010", '7album.jpg', '24.mp3'),
      new Song(26, "Diamons", "Rihanna", "3:45", "Unapologetic", "Pop", "2012", '25album.jpg', '25.mp3'),
      new Song(27, "Viva la vida", "Coldplay", "4:01", "Viva la vida", "Pop", "2008", '26album.jpg', '26.mp3'),
      new Song(28, "Take on me", "A-ha", "4:04", "Hunting high and low", "Alternative", "1985", '27album.jpg', '27.mp3'),
      new Song(29, "Dusk till down", "Zayn & Sia", "3:55", "Dusk Till Down", "Pop", "2017", '28album.jpg', '28.mp3'),
      new Song(30, "Señorita", "Shawn Mendes & Camila Cabello", "3:25", "Latin Pop", "2019", '29album.jpg', '29.mp3'),
      new Song(31, "Empire States of Mind", "Alicia Keys", "3:29", "The Element of freedom", "R&B/Soul", "2009", '30album.jpg', '30.mp3')
    ]


    this.mostrarCanciones();

    this.actualSong = this.CatalogoDeCanciones[0];
    this.audio = new Audio();
    this.actualPlaylist = 'buscar';

    let buscar = document.getElementById('buscar');
    buscar.addEventListener('click', () => {
      this.buscarCancion(document.getElementById('input').value);
    });

    let play = document.getElementById('play');
    play.addEventListener('click', () => {
      this.play();
    });
    let stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
      this.stop();
    });

    this.pause();
    let siguiente = document.getElementById('stop');
    stop.addEventListener('click', () => {
      this.stop();
    });

    let adelantarButton = document.getElementById('adelantar');
    adelantarButton.addEventListener('click', () => {
      this.adelantarCancion();
    });

    let retrocederCancion = document.getElementById('retroceder');
    retrocederCancion.addEventListener('click', () => {
      this.retrocederCancion();
    });
    this.cambiarPortada();


  }


  mostrarCanciones() {
    let canciones = document.getElementById('lista');
    canciones.innerHTML = '';

    this.CatalogoDeCanciones.forEach(Song => {
      canciones.innerHTML += `<li id="resp1${Song.id}" class="cancion">${Song.nombre}
        <span class="addPlaylist fa fa-play"></span>
        <span class="favoritos fa fa-heart" onclick="reproductor.agregarFavorito(${Song.id})"></span>
        <span class="fa fa-plus" aria-hidden="true"></span>
        </li>`;
    });
  }

  buscarCancion(inputUser) {
    inputUser = inputUser.trim().toLowerCase();
    let canciones = document.getElementById('lista');
    canciones.innerHTML = '';

    if (!inputUser) {
      // Si no hay búsqueda, mostrar todas las canciones
      this.mostrarCanciones();
      return;
    }

    let respNombre = this.CatalogoDeCanciones.filter(Song => Song.nombre.toLowerCase().includes(inputUser));
    let respAlbum = this.CatalogoDeCanciones.filter(Song => Song.album.toLowerCase().includes(inputUser));
    let respArtista = this.CatalogoDeCanciones.filter(Song => Song.autor.toLowerCase().includes(inputUser));

    let filtroDeCanciones = [...respNombre, ...respAlbum, ...respArtista];
    filtroDeCanciones = [...new Set(filtroDeCanciones)];

    this.mostrarBusqueda(filtroDeCanciones);
  }

  mostrarBusqueda(filtroDeCanciones) {
    let canciones = document.getElementById('lista');

    if (filtroDeCanciones.length === 0) {
      canciones.innerHTML = '<li>No se encontraron resultados</li>';
      return;
    }

    filtroDeCanciones.forEach(Song => {
      canciones.innerHTML += `<li id="resp${Song.id}" class="cancion">
            <span class="nombre">${Song.nombre}</span>
            <span class="autor">${Song.autor}</span>
            <span class="album">${Song.album}</span>
            <span class="duracion">${Song.duracion}</span>
            <span id="playicono" class="addPlaylist fa fa-play"></span>
            <span id="hearticono" class="favoritos fa fa-heart"></span>
        </li>`;
    });
  }


  play () {

    if (this.actualSong !== undefined) {
      this.audio.src = "../assets/canciones/" + this.actualSong.urlSong;
      this.audio.play();
    } else {
      let id;
      switch (this.actualPlaylist) {
        case 'favoritos':
          id = document.getElementById("play");
        case 'playlist':
          id = document.getElementById("play");
        case 'busqueda':
          id = document.getElementById("play");
          break;

      }

      this.actualSong = this.CatalogoDeCanciones.find(Song => Song.id === id);
      this.audio.src = "../assets/canciones/" + this.actualSong.urlSong;
      this.audio.play();

    }


  }

  pause () {
    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener('click', () => {
      // Pausar la canción actual
      this.audio.pause();
    });
  }

  stop () {
    let actualSong = this.actualSong;

    // Assuming the audio element is already created and stored in this.audio
    if (this.audio !== undefined) {
      this.audio.pause();
      this.audio.currentTime = 0;
    } else {
      // If this.audio is not defined, create a new audio element
      this.audio = new Audio(actualSong.urlSong);
    }
  }

  adelantarCancion() {
    if (this.CatalogoDeCanciones.length > 0) {
      this.actualSong = this.CatalogoDeCanciones.shift();
      this.audio.src = "../assets/canciones/" + this.actualSong.urlSong;
      this.audio.play();
      this.cambiarPortada();
    } else {
      console.log("No hay más canciones en la lista.");
    }
  }

  retrocederCancion() {
    if (this.CatalogoDeCanciones.length > 0) {
      this.CatalogoDeCanciones.unshift(this.actualSong);
      this.actualSong = this.CatalogoDeCanciones.pop();
      this.audio.src = "../assets/canciones/" + this.actualSong.urlSong;
      this.audio.play();
      this.cambiarPortada();
    } else {
      console.log("No hay más canciones en el historial.");
    }
  }


  cambiarPortada = function () {
    const cover = document.getElementById("portada");
    cover.src = "../assets/album/" + this.actualSong.cover;
  }

  actualizarFavoritosHTML() {
    const divFavoritos = document.getElementById('favoritos1'); // Asegúrate de que el ID coincida con tu HTML
    divFavoritos.innerHTML = ''; // Limpia el contenido actual

    this.favoritos.listaDeCanciones.forEach(cancion => {
      // Asume que cada canción tiene un atributo 'nombre'. Ajusta según tu implementación.
      const elementoCancion = document.createElement('div');
      elementoCancion.textContent = cancion.nombre; // Puedes añadir más detalles si lo deseas
      divFavoritos.appendChild(elementoCancion);
    });
  }

  agregarFavorito(idCancion) {
    const cancion = this.CatalogoDeCanciones.find(cancion => cancion.id === idCancion);
    if (cancion) {
      this.favoritos.addSongToPlayList(cancion);
      console.log(`Agregada a favoritos: ${cancion.nombre}`);
      this.actualizarFavoritosHTML(); // Actualiza la UI
    }
  }



}


document.addEventListener('DOMContentLoaded', (event) => {
  let reproductor = new Reproductor();
  window.reproductor = reproductor; // Esto expone 'reproductor' al ámbito global
});




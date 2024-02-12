export class Song {
  constructor(id, nombre, autor, duración, album, año, género, cover, urlSong) {
    this.id = id;
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
    return `${this.nombre} - ${this.album}`;
  }

  getSongNameAndAutor() {
    return `${this.nombre} - ${this.autor}`;
  }

  getSongNameAndDuracion() {
    return `${this.nombre} - ${this.duracion}`;
  }

  getSongNameAndgenero() {
    return `${this.nombre} - ${this.genero} `;
  }

  getSongNameAndCover() {
    return `${this.nombre} - ${this.cover}`;
  }

  getSongNameAndAño() {
    return `${this.nombre} - ${this.año}`;
  }

  getSongNameAndUrl() {
    return `${this.nombre} - ${this.urlSong}`;
  }
}

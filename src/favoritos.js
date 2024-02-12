export class Favorites {
  constructor(nombre, listaDeCanciones, ordenDeEscucha) {
    this.nombre = nombre;
    this.listaDeCanciones = listaDeCanciones;
    this.ordenDeEscucha = ordenDeEscucha;
  }

  getPlayListName() {
    return this.nombre
  }

  getPlayListaDeCanciones() {
    return this.listaDeCanciones
  }

  getPlayListOrdenDeEscucha() {
    return this.ordenDeEscucha
  }

  addSongToPlayList(Song) {
    this.listaDeCanciones.push(Song);

  }

  removeSongFromPlayLIst(Song) {
    this.listaDeCanciones = this.listaDeCanciones.filter(s => s !== Song);
  }

  shufflePlayList() {
    this.listaDeCanciones = this.listaDeCanciones.sort(() => Math.random() - 0.5);
  }

  playPlayList() {
    this.listaDeCanciones.forEach(
      Song => {
        console.log(`Playing: ${Song.nombre}`);
      }
    )
  }

  getActualCancion(i) {
    return this.listaDeCanciones[i];
  }

  nextSong() {
    this.listaDeCanciones.shift();
  }
}

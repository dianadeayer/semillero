//Albums
const album = {
  artist: "Adrianne Lenker",
  songs: [
    { name: "anything", duration: 180 },
    { name: "forwards beckon rebound", duration: 192 },
    { name: "heavy focus", duration: 140 },
    { name: "half return", duration: 124 },
    { name: "come", duration: 310 },
    { name: "zombie girl", duration: 146 },
    { name: "not a lot just forever", duration: 246 },
    { name: "dragon eyes", duration: 195 },
    { name: "my angel", duration: 302 },
    { name: "two reverse", duration: 199 },
  ],
};

const album2 = {
  artist: "Fiona Apple",
  songs: [
    { name: "Fast As You Can", duration: 240 },
    { name: "The First Taste", duration: 300 },
    { name: "Love Ridden", duration: 240 },
  ],
};

album3 = {
  artist: "elliot smith",
  songs: [
    { name: "Angeles", duration: 200 },
    { name: "Between the Bars", duration: 180 },
    { name: "Bled White", duration: 240 },
  ],
};

//validacion de si el objeto contiene informacion
const isAlbumEmpty = (album) => {
  if (album.hasOwnProperty("songs") && album.songs.length > 0) {
    return false; // el álbum no está vacío
  }
  return true;
};

// funcion que no permita que las siguientes funcones se ejecuten si el objeto esta vacio
const validateAlbum = (album) => {
  if (isAlbumEmpty(album)) {
    console.error("Album is empty");
    return false;
  }
  if (!validateStructure(album)) {
    console.error("Album structure is invalid");
    return false;
  }
  return true;
};

//VALIDACIONES

//validacion si la estructura del objeto es correcta
function validateStructure(album) {
  if (typeof album !== "object") {
    console.error("Album is not and object");
    return false;
  }

  if (!album.hasOwnProperty("artist")) {
    console.warn("Album does not have an artist");
    return false;
  }

  if (typeof album.artist !== "string") {
    console.warn("Album is not a string");
    return false;
  }
  if (!album.hasOwnProperty("songs")) {
    console.warn("Album is missing songs");
    return false;
  }

  if (!Array.isArray(album.songs)) {
    console.error("Album songs is not an array");
    return false;
  }
  return true;
}

//validacion de si informacion de duracion es correcta
function validateSeconds(input) {
  const seconds = Number(input);
  return Number.isInteger(seconds) && seconds >= 0;
}

//imprime canciones ordenadas por duracion y valida si la duracion es correcta
function printSortedSongs(album) {
  const validSongs = album.songs.filter((song) => {
    const isValid = validateSeconds(song.duration);
    if (!isValid) {
      console.warn(`Song duration is invalid "${song.name}": ${song.duration}`);
    }
    return isValid;
  });

  const sortedSongs = album.songs.sort((a, b) => a.duration - b.duration);

  sortedSongs.forEach((song) => {
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    console.log(`${song.name}: ${minutes}m ${seconds}s`);
  });
  console.log("/////////////////////////////////////////////////");
}

//suma de duracion de canciones
function albumDuration(album) {
  return album.songs.reduce((total, song) => total + song.duration, 0);
}

//EJECUCIONES

console.log(isAlbumEmpty(album));
console.log(isAlbumEmpty(album2));
console.log(isAlbumEmpty(album3));

printSortedSongs(album);
printSortedSongs(album2);
printSortedSongs(album3);

//imprime duracion total de album por artista
const total = albumDuration(album);
{
  const total = albumDuration(album);
  console.log(
    ` ${album.artist} Total Duration: ${Math.floor(total / 60)}m ${total % 60}s`
  );
}

const total2 = albumDuration(album2);
{
  const total2 = albumDuration(album2);
  console.log(
    ` ${album2.artist} Total Duration: ${Math.floor(total2 / 60)}m ${
      total2 % 60
    }s`
  );
}

const total3 = albumDuration(album3);
{
  const total3 = albumDuration(album3);
  console.log(
    ` ${album3.artist} Total Duration: ${Math.floor(total3 / 60)}m ${
      total3 % 60
    }s`
  );
}

// Albums
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
    { name: "cradle", duration: 180 },
    { name: "blue", duration: 240 },
    { name: "sick of spiraling", duration: 300 },
  ],
};

const album2 = {
  artist: "Fiona Apple",
  songs: [
    { name: "Fast As You Can", duration: 240 },
    { name: "The First Taste", duration: 300 },
    { name: "Love Ridden", duration: 240 },
    { name: "Shadowboxer", duration: 180 },
    { name: "Sleep to Dream", duration: 240 },
    { name: "Criminal", duration: 300 },
    { name: "The First Taste", duration: 240 },
    { name: "The Way Things Are", duration: 180 },
    { name: "Paper Bag", duration: 240 },
    { name: "I Know", duration: 300 },
    { name: "A Mistake", duration: 240 },
    { name: "The First Taste", duration: 180 },
  ],
};

const album3 = {
  artist: "elliot smith",
  songs: [
    { name: "Angeles", duration: 200 },
    { name: "Between the Bars", duration: 180 },
    { name: "Bled White", duration: 240 },
    { name: "Clementine", duration: 300 },
    { name: "Last Call", duration: 240 },
    { name: "Needle in the Hay", duration: 180 },
    { name: "Say Yes", duration: 240 },
    { name: "Somebody That I Used to Know", duration: 300 },
    { name: "Waltz #2 (XO)", duration: 240 },
    { name: "Between the Bars", duration: 180 },
    { name: "Bled White", duration: 240 },
    { name: "Clementine", duration: 300 },
  ],
};

// validaciones

const isAlbumEmpty = (album) => {
  return !(album.hasOwnProperty("songs") && album.songs.length > 0);
};

function validateStructure(album) {
  if (typeof album !== "object") {
    console.error("Album is not an object");
    return false;
  }

  if (!album.hasOwnProperty("artist") || typeof album.artist !== "string") {
    console.warn("Album artist is missing or not a string");
    return false;
  }

  if (!album.hasOwnProperty("songs") || !Array.isArray(album.songs)) {
    console.warn("Album songs is missing or not an array");
    return false;
  }

  if (album.songs.length === 0) {
    console.warn("Album has no songs");
    return false;
  }

  return true;
}

const validateSeconds = (input) => {
  const seconds = Number(input);
  return Number.isInteger(seconds) && seconds >= 0;
};

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

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function topTenSongs(album) {
  const songs = album.songs.slice();
  const sortedSongs = songs.sort((a, b) => a.duration - b.duration);
  return sortedSongs.slice(0, 10);
}

function printTopTen(album) {
  if (!validateAlbum(album)) return;

  const songs = topTenSongs(album);
  console.log(`\x1b[36mTop 10 songs from ${album.artist}:	\x1b[0m`);

  songs.forEach((song, index) => {
    const formattedTime = formatDuration(song.duration);
    console.log(`${index + 1}. ${song.name} (${formattedTime})`);
  });
}
// ejecuciones

console.log("\x1b[32m/////////////////////////////////////////////////\x1b[0m");
printTopTen(album);
console.log("\x1b[32m/////////////////////////////////////////////////\x1b[0m");
printTopTen(album2);
console.log("\x1b[32m/////////////////////////////////////////////////\x1b[0m");
printTopTen(album3);

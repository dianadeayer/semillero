const album = {
  artist: "Adrianne Lenker",
  songs: [
    { name: "anything", duration: 199 },
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

function printSortedSongs(album) {
  const sortedSongs = album.songs.sort((a, b) => a.duration - b.duration);

  sortedSongs.forEach((song) => {
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    console.log(`${song.name}: ${minutes}m ${seconds}s`);
  });
  console.log("/////////////////////////////////////////////////");
}

printSortedSongs(album);
printSortedSongs(album2);
printSortedSongs(album3);

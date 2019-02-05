var playlist = {
  caravan_palace: "Black Betty"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  playlist[artistName] = null;
}
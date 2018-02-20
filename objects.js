var playlist = {
  artistName: ''
}

var updatePlaylist = (playlist, artistName, songTitle) => {
   artistName = playlist.artistName;
   playlist.artistName = songTitle;
}

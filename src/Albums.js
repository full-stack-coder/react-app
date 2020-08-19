import React from 'react';
import './App.css';

function Albums() {

  const album1 = {title: "first title", artist: "first artist", numberOfTracks: 1, price: 1.1};
  const album2 = {title: "second title", artist: "second artist", numberOfTracks: 2, price: 2.2};
  const album3 = {title: "third title", artist: "third artist", numberOfTracks: 3, price: 3.3};

  const albums = [album1, album2, album3];

  const renderAlbumList = (album, index) => {
    return (
      <li key={index}>
        {"Title: " + album.title + ", Artist: " + album.artist + ", Tracks: " + album.numberOfTracks + ", Price: " + album.price}
      </li>)
  }

  return (
    <>
        <p>List of Albums</p>
        <ul>
          {albums.map((album, index) => {
            return renderAlbumList(album, index);
          })}
        </ul>
    </>
  )
}

export default Albums;
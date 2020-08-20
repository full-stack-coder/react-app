import React, { useState, useEffect } from 'react';
import './App.css';

function Albums() {
   const GET_URL = "http://localhost:8080/api/compactdiscs";

  
  // local state
  const [albums, setAlbums] = useState([]);

  // effects
  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    const response = await fetch(GET_URL);
    const data = await response.json();
    console.log("***** response json is: ", data);
    if (data) {
      setAlbums(data);
    }
  }

  // renderer helpers
  const renderAlbumList = (album, index) => {
    return (
      <li key={index}>
        {"Title: " + album.title + ", Artist: " + album.artist + ", Price: " + album.price + ", Id: " + album.id}
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
/* Brisa Carter 
Week 13 - Lab 11.17
ICS385 - Spring 2025
File name: Song.js 
*/

import React from 'react';

// Define the Song component
const Song = ({ link, title, artist, length }) => {
   return (
      <div>
         <p>Title: <a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>
         <p>Artist: {artist}</p>
         <p>Length: {length}</p>
      </div>
   );
};

export default Song;
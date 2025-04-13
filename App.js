/* Brisa Carter 
Week 13 - Lab 11.17
ICS385 - Spring 2025
File name: App.js 
*/

import React from 'react';
// Import Song component
import Song from './Song';

function App() {
   // Define your Africa song information
   const link = "https://en.wikipedia.org/wiki/Africa_(Toto_song)";
   const title = "Africa";
   const artist = "Toto";
   const length = "4:55";

   return (
      <div>
         <Song
            link={link}
            title={title}
            artist={artist}
            length={length}
         />
      </div>
   );
}

export default App;
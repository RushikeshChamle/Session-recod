// import React, { useState, useEffect } from "react";
// import * as rrweb from "rrweb";

// import rrwebPlayer from "rrweb-player";

// import "rrweb-player/dist/style.css";

// import "rrweb-player/dist/style.css";

// <link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css"
// />;

// function App() {
//   let events = [];

//   rrweb.record({
//     emit(event) {
//       // push event into the events array
//       events.push(event);
//     },
//   });

//   function save() {
//     const body = JSON.stringify({ events });
//     events = [];
//     fetch("http://localhost:3000/record", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body,
//     });
//   }

//   // save events every 10 seconds
//   setInterval(save, 10 * 1000);

//   return (
//     <div>
//       <h1>rrweb Event Recorder</h1>
//       <p>Recording events...</p>

//       <div id="rrweb-player-container" />

//       <button id="65">This is Button 1</button>
//       <button id="3">This is Button 2</button>
//       <button id="64">This is Button 3</button>
//       <button id="64">This is Button 4</button>

//       <button id="6">This is Button 133</button>
//       <button id="564">This is Button 23</button>
//       <button id="673">This is Button 33</button>
//       <button id="6333">This is Button 43</button>
//     </div>
//   );
// }

// export default App;

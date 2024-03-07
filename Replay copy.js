// import React, { useState, useEffect } from "react";
// import rrwebPlayer from "rrweb-player";
// import "rrweb-player/dist/style.css";

// import "rrweb/dist/rrweb.min.css";

// import * as rrweb from "rrweb";

// <link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css"
// />;

// function App() {
//   const [events, setEvents] = useState([]);
//   const [sessionId, setSessionId] = useState(""); // State to store session ID
//   const [isLoading, setIsLoading] = useState(true); // State to track loading state
//   const [libraryError, setLibraryError] = useState(false); // State to track library loading errors

//   useEffect(() => {
//     fetchSessionEvents("671");
//   }, []);

//   const fetchSessionEvents = (sessionId) => {
//     setIsLoading(true);
//     fetch(`http://localhost:3000/replay/${sessionId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched events:", data);
//         setEvents(data.events || []);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching session events:", error);
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (events.length > 0) {
//       initializeReplayer();
//     }
//   }, [events]);

//   const initializeReplayer = () => {
//     // Check if rrweb-player library is loaded
//     if (!window.rrwebPlayer) {
//       setLibraryError(true);
//       return;
//     }

//     const player = new rrwebPlayer({
//       target: document.getElementById("rrweb-player-container"),
//       props: {
//         events,
//         width: 1024,
//         height: 576,
//       },
//     });

//     player.play();

//     // Initialize rrwebPlayer
//     // new rrwebPlayer({
//     //   target: document.getElementById("rrweb-player-container"),
//     //   props: {
//     //     events,
//     //     autoPlay: true,
//     //   },
//     // });
//   };

//   return (
//     <div>
//       <h1>Replay Session Events</h1>
//       {isLoading && <p>Loading...</p>}
//       {!isLoading && !libraryError && (
//         <div
//           style={{
//             position: "relative",
//             background: "#ffffff",
//             width: "100%",
//             height: "400px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//           id="rrweb-player-container"
//         />
//       )}
//       {libraryError && (
//         <p>
//           Error: Unable to load rrweb-player library. Please check your internet
//           connection.
//         </p>
//       )}
//     </div>
//   );
// }

// export default App;

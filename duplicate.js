// import React, { useState, useEffect } from "react";
// import rrwebPlayer from "rrweb-player";
// import rrweb from "rrweb";

// import "rrweb-player/dist/style.css";

// function SessionPlayer({ sessionId }) {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     console.log("Fetching events for session ID:", sessionId);
//     // Fetch recorded events from the backend API
//     fetch(`http://localhost:3000/replay/${sessionId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched events for session ID:", sessionId, data); // Log the fetched events
//         setEvents(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching session data:", error);
//       });
//   }, [sessionId]);

//   useEffect(() => {
//     const player = new rrwebPlayer({
//       target: document.getElementById("rrweb-player-container"),
//       props: {
//         events,
//       },
//     });
//   }, [events]);

//   return <div id="rrweb-player-container" />;
// }

// // function App() {
// //   const sessionId1 = "76"; // Replace with the actual session ID
// //   const sessionId2 = "77"; // Replace with the actual session ID

// //   return (
// //     <div>
// //       <h1>Session Replay</h1>

// //       <SessionPlayer sessionId={sessionId1} />
// //       <SessionPlayer sessionId={sessionId2} />
// //     </div>
// //   );
// // }

// function App() {
//   useEffect(() => {
//     let events = [];

//     const recordEvents = () => {
//       rrweb.record({
//         emit(event) {
//           // push event into the events array
//           events.push(event);
//         },
//       });
//     };

//     const saveEvents = () => {
//       const body = JSON.stringify({ events });
//       events = [];
//       fetch("http://localhost:3000/record", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to save events");
//           }
//           console.log("Events saved successfully");
//         })
//         .catch((error) => {
//           console.error("Error saving events:", error);
//         });
//     };

//     recordEvents();
//     const intervalId = setInterval(saveEvents, 10 * 1000);

//     // Cleanup function
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>rrweb Event Recorder</h1>
//       <p>Recording events...</p>

//       <button id="65"> This is 1 Button</button>
//       <button id="3"> This is 2 Button</button>
//       <button id="64"> This is 3 Button</button>
//       <button id="64"> This is 4 Button</button>

//       <button id="6"> This is 133 Button</button>
//       <button id="564"> This is 23 Button</button>
//       <button id="673"> This is 33 Button</button>
//       <button id="6333"> This is 43 Button</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import rrwebPlayer from "rrweb-player";
// import * as rrweb from "rrweb";

// import "rrweb-player/dist/style.css";

// function App() {
//   const [events, setEvents] = useState([]);
//   const [isRecording, setIsRecording] = useState(false);

//   useEffect(() => {
//     if (isRecording) {
//       // Start recording when isRecording becomes true
//       const recorder = rrweb.record({
//         emit(event) {
//           setEvents((prevEvents) => [...prevEvents, event]);
//         },
//       });

//       // Stop recording when isRecording becomes false
//       return () => recorder.stop();
//     }
//   }, [isRecording]);

//   const startRecording = () => {
//     setEvents([]); // Clear previous events
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     saveEvents(events);
//   };

//   const replayEvents = () => {
//     fetchSessionEvents();
//   };

//   const saveEvents = (events) => {
//     // Save recorded events to the server
//     const body = JSON.stringify({ events });
//     fetch("http://localhost:3000/record", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body,
//     })
//       .then(() => console.log("Events saved successfully"))
//       .catch((error) => console.error("Error saving events:", error));
//   };

//   const fetchSessionEvents = () => {
//     fetch("http://localhost:3000/replay/681") // Replace 1 with the correct session ID
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched events:", data);
//         setEvents(data || []);
//         replayEventsLocally(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching session events:", error);
//       });
//   };

//   const replayEventsLocally = (events) => {
//     const player = new rrwebPlayer({
//       target: document.getElementById("player"),
//       props: {
//         events: events,
//       },
//     });

//     player.play();

//     player.pause();
//   };

//   return (
//     <div>
//       <h1>rrweb Event Recorder</h1>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <button onClick={replayEvents}>Replay Events</button>
//       <div id="player"></div>
//     </div>
//   );
// }

// export default App;

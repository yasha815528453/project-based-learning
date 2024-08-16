import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
    
    const { roomCode } = useParams(); // Accessing the room code from the URL
    
    const [state, setState] = useState({
      votesToSkip: 4,
      guestCanPause: false,
      isHost: false,
    });
  
    useEffect(() => {
      getRoomDetails();
    }, []); // Empty dependency array means this effect will run once, similar to componentDidMount
  
    const getRoomDetails = () => {
      fetch('/api/get-room' + '?code=' + roomCode)
        .then(response => response.json())
        .then(data => {
          setState({
            votesToSkip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
          });
        })
        .catch(error => {
          console.error("Error fetching room details:", error);
          // Handle error, e.g., set default state or show an error message
        });
    }
  
    return (
      <div>
        <h3>{roomCode}</h3>
        <p>Votes: {state.votesToSkip}</p>
        <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
        <p>Host: {state.isHost.toString()}</p>
      </div>
    );
  }
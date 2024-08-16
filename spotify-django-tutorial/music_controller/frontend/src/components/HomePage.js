import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Room from "./Room";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<p>This is the home page</p>} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
}
import { height } from "@mui/system";
import React from "react";
import { useState } from "react";
import fem from "./music/fem.mp3";
import "./App.css";
import { playlist } from "./constants/index";

function Playlist(e) {
  function handleClick(e) {
    e.preventDefault();
    console.log();

    //
  }
  // const [playlist, setPlaylist] = useState([

  // ]);
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#121212",
        height: "100vh",
        marginTop: 0,
      }}
    >
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          gap: 20,
          paddingTop: 20,
          marginLeft: 20,
        }}
      >
        {playlist.map((artists) => (
          <div
            style={{
              backgroundColor: "#181818",
              padding: 4,
              borderRadius: "0.5rem",
            }}
            key={artists.id}
          >
            <div
              style={{
                position: "relative",
                width: "200px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -20,
              }}
            >
              <img
                src={artists.image}
                style={{
                  height: "180px",
                  width: "85%",
                  objectFit: "cover",
                  borderRadius: "3%",
                  marginBottom: 5,
                }}
              />
            </div>
            <div
              style={{
                marginBottom: 30,
                marginTop: -20,
                marginLeft: 10,
              }}
            >
              <h4 style={{ color: "white", marginBottom: 3 }}>
                {artists.title}
              </h4>
              <p style={{ color: "#A7A7A7" }}>
                {artists.name === "" ? "artist" : artists.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;

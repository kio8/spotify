import { height } from "@mui/system";
import React from "react";
import { useState } from "react";
import fem from "./music/fem.mp3";
import "./App.css";

function Playlist(e) {
  function handleClick(e) {
    e.preventDefault();

    //
  }
  // const [playlist, setPlaylist] = useState([
  const playlist = [
    {
      id: 1,
      genre: "Hip Hop",
      artist: "J cole",
      title: " born sinner  ",
      imag: "",
    },
    {
      id: 2,
      genre: "afro-beats",
      artist: "Burnaboy",
      title: " Last Last ",
      image: "",
    },
    {
      id: 3,
      genre: "Rock",
      artist: "Tatu",
      title: " All the things she said  ",
      image: "",
    },
    { id: 6, genre: "Hip hop", artist: "Nas", title: " Ether ", image: "" },
    { id: 5, genre: "Afro-beats", artist: "Davido", title: " fem", image: "" },
  ];
  // ]);
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#121212",
        height: "100vh",
        marginTop: "0px",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-around",
          // marginTop: "5px",
          backgroundColor: "white",
        }}
      >
        {playlist.map((artists) => (
          <main
            style={{
              marginBottom: 10,
              paddingLeft: 30,
              display: "flex",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              {artists.artist === "Davido" ? (
                <img
                  src={require("./images/davido.jpg")}
                  // className="filter: drop-shadow(20px 10px 4px black);"
                  style={{
                    height: 100,
                    width: 100,
                    border: "solid thin black",
                    borderRadius: "50%",
                  }}
                />
              ) : artists.artist === "Burnaboy" ? (
                <img
                  src={require("./images/BurnaBoy .jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    border: "solid thin black",
                    borderRadius: "50%",
                  }}
                />
              ) : artists.artist === "J cole" ? (
                <img
                  src={require("./images/jcole.jpg")}
                  // className="image-shadow"
                  style={{
                    height: 100,
                    width: 100,
                    border: "solid thin black",
                    borderRadius: "50%",
                  }}
                />
              ) : artists.artist === "Nas" ? (
                <img
                  src={require("./images/nas.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    // border: "solid thin black",
                    borderRadius: "50%",
                  }}
                />
              ) : artists.artist === "Tatu" ? (
                <img
                  src={require("./images/tatu.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    border: "solid thin black",
                    borderRadius: "50%",
                  }}
                  alt="nas"
                />
              ) : (
                <button> Upload PIcs</button>
              )}
              <div
                className=""
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <p> {artists.artist}</p>
                <p> {artists.title}</p>
                <h3> {artists.genre}</h3>
              </div>

              <div>
                {" "}
                <button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#191414",
                    width: "100px",
                    borderRadius: "5px",
                    color: "whitesmoke",
                  }}
                >
                  {" "}
                  Play Music
                </button>
              </div>
            </div>
          </main>
        ))}
      </div>
    </div>
  );
}

export default Playlist;

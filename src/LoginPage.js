import React from "react";
import { TextField } from "@mui/material";
import { borders } from "@mui/system";
import { useState } from "react";

import "./login.css";
import { CompressOutlined } from "@mui/icons-material";

function LoginPage() {
  const [form, setForm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlesignup() {
    if (form !== "signup") {
      setForm("signup");
    }
  }

  function handlesignin() {
    console.log("signin clicked");
    console.log(form);
    if (form !== "signin") {
      setForm("signin");
    }
 if( email !== '' && password !== ''){
    console.log(email)
    console.log(password)
 }

  }
  // const[ signup , setSignup]= useState(false)
  return (
    <div className="container" style={{ display: "flex" }}>
      <div
        className="items"
        style={{
          backgroundColor: "#191414",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="right__login"
          style={{ color: "white", margin: "10px" }}
        >
          <img src={require("./images/mlogo.png")} />
          {/* <span> Music Box</span> */}
          <div
            className="rightlogin_form"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            {form === "signin" && (
              <form className="l">
                <input
                  id="Email"
                  type="text"
                  placeholder="Enter email"
                  style={{
                    marginBottom: "10px",
                    width: 300,
                    height: 45,
                    border: "none",
                    borderRadius: "20px",
                    textSize: 20,
                    outline: "none",
                    backgroundColor: "gray",
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <input
                  id="password"
                  type="Password"
                  placeholder="Password"
                  style={{
                    marginBottom: "10px",
                    width: 300,
                    height: 45,
                    border: "none",
                    borderRadius: "20px",
                    textSize: 20,
                    outline: "none",
                    backgroundColor: "gray",
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  id="first Name"
                  type="text"
                  placeholder="Enter first"
                  style={{
                    marginBottom: "10px",
                    width: 300,
                    height: 45,
                    border: "none",
                    borderRadius: "20px",
                    textSize: 20,
                    outline: "none",
                    backgroundColor: "gray",
                  }}
                />
              </form>
            )}
            {form === "signup" && (
              <form className="l">
                <input
                  id="Email"
                  type="text"
                  placeholder="Enter user name or email"
                  style={{
                    marginBottom: "10px",
                    width: 300,
                    height: 45,
                    border: "none",
                    borderRadius: "20px",
                    textSize: 20,
                    outline: "none",
                    backgroundColor: "red",
                  }}
                />

                <input
                  id="Email"
                  type="Password"
                  placeholder="Password"
                  style={{
                    marginBottom: "10px",
                    width: 300,
                    height: 45,
                    border: "none",
                    borderRadius: "20px",
                    textSize: 20,
                    outline: "none",
                    backgroundColor: "red",
                  }}
                />
              </form>
            )}

            <button
              type="button"
              style={{
                width: 200,
                height: 50,
                marginBottom: "5px",
                width: 300,
                borderRadius: "20px",
                outline: "none",
                backgroundColor: "#191414",
                color: "whitesmoke",
                fontSize: "20px",
                border: "none",
              }}
              onClick={handlesignup}
            >
              Signup
            </button>
            {/* <br/> */}
            <button
              type="button"
              style={{
                width: 200,
                height: 50,
                marginBottom: "5px",
                width: 300,
                borderRadius: "20px",
                backgroundColor: "#191414",
                color: "white",
                fontSize: "20px",
                border: "none",
              }}
              onClick={handlesignin}
            >
              {email !== "" && password !== "" ? "Login" : "Signin"}
            </button>
          </div>
        </div>
        <div className="left__login" style={{ color: "white" }}>
          <img src={require("./images/headphones.jpg")} alt="headphone" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

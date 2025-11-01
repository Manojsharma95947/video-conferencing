import React from "react";
import { useState, useContext } from "react";
import withAuth from "../utils/withAuth";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
    <div style={{backgroundColor:"rgb(166, 245, 226)",height:"100vh"}}>

      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Video-conferencing Call</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
          >
            <RestoreIcon />
          </IconButton>
          <p>History</p>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2 style={{marginBottom:"15px"}}>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: "flex", gap: "15px" }}>
              <TextField style={{backgroundColor:"white",borderRadius:"5px"}}
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"

              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);

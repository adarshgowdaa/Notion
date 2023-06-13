import React, { useState } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { OutlinedInput } from "@mui/material";
import logo from "../img/logo.jpeg";
import logo1 from "../img/logo1.png";
import "./Share.css";

const Share = () => {
  const [entries, setEntries] = useState([
    { id: 1, name: "abcd@intiant.com", role: "Full access" },
  ]);
  const [newEntryName, setNewEntryName] = useState("");
  const [newEntryRole, setNewEntryRole] = useState("");

  const handleNewEntryNameChange = (event) => {
    setNewEntryName(event.target.value);
  };

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      name: newEntryName,
      role: newEntryRole,
    };

    setEntries([...entries, newEntry]);
    setNewEntryName("");
    setNewEntryRole("");
  };

  const selectOptions = [
    { value: 1, label: "Full access" },
    { value: 2, label: "Can edit" },
    { value: 3, label: "Can view" },
    { value: 4, label: "No access" },
  ];
  return (
    <>
      <div style={{ margin: "1rem" }}>
        <div>
          <OutlinedInput
            size="small"
            placeholder="Add people, groups, or email..."
            onChange={handleNewEntryNameChange}
            sx={{ width: "300px" }}
          />
          <Button
            variant="contained"
            sx={{ textTransform: "none", marginLeft: "10px" }}
            onClick={handleAddEntry}
          >
            Invite
          </Button>
        </div>
        {entries.map((entry) => (
          <div className="everyone" key={entry.id}>
            {/* <span>
              <img src="../img/logo.png" width="40" height="40" alt="logo" />
            </span> */}
            <div>
              <p id="title">{entry.name}</p>
            </div>
            <Select className="select" size="small" defaultValue={1}>
              {selectOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <div className="everyone">
          <span>
            <img src={logo} width="40" height="40" alt="logo" />
          </span>
          <div>
            <p id="title">Everyone at intiant</p>
            <p id="subtitle">20 workspace members</p>
          </div>
          <Select className="select" size="small" defaultValue={1}>
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="everyone">
          <span>
            <img src={logo1} width="40" height="40" alt="logo" />
          </span>
          <div>
            <p id="title">Adarsh Gowda</p>
            <p id="subtitle">adarshgowda463@gmail.com</p>
          </div>
          <Select className="select" size="small" defaultValue={2}>
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
        
      </div>
      <Box sx={{ borderTop: 1, borderColor: "gray" }}>
        <div className="foot">
          <a href="/" id="learn">
            ❔Learn about sharing
          </a>
          <a href="/" id="link">
            🔗 Copy link
          </a>
        </div>
      </Box>
    </>
  );
};

export default Share;

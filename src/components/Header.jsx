import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Publish from "./Publish";
import Share from "./Share";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ marginTop: "20px" }}>
      <Button sx={{backgroundColor: 'black'}} aria-describedby={id} variant="contained" onClick={handleClick}>
        Share
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      {/* <Publish/> */}
      <Share/>
      </Popover>
    </div>
  );
}

export default Header;

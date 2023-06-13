import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { OutlinedInput } from "@mui/material";
import "./Publish.css";

const Publish = () => {
  return (
    <div style={{margin: "1rem"}}>
      <div style={{margin: "1rem" }}>
        <OutlinedInput
          size="small"
          value={window.location.href}
          readOnly
        ></OutlinedInput>
        <Button sx={{textTransform: 'none', color: 'black'}} variant="outlined">Copy Web link</Button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <div className="access">
          <label>Link expires</label>
          <Select size="small" defaultValue={1}>
            <MenuItem value={1}>Never</MenuItem>
            <MenuItem value={2}>Always</MenuItem>
          </Select>
        </div>
        {[
          "Allow editing",
          "Allow comments",
          "Allow duplicate as Template",
          "Search engine indexing",
        ].map((access, index) => (
          <div className="access" key={index}>
            <div>{access}</div>
            <Switch defaultChecked size="small" />
          </div>
        ))}
      </div>

      <div className="btn">
        <Button sx={{color: 'black', textTransform: 'none', width: '175px'}} variant="outlined" id="unpublish-btn">Unpublish</Button>
        <Button sx={{textTransform: 'none', width: '175px'}} variant="contained" id="view-btn">View site</Button>
      </div>
    </div>
  );
};

export default Publish;

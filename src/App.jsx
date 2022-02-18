import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Container, Grid, CardMedia, TextField } from "@mui/material";
import video from "./feed_video.mp4";
import { borderColor, Box, maxWidth } from "@mui/system";
import { green, lightGreen } from "@mui/material/colors";
import Slider from "@mui/material/Slider";
import SvgIcon from "@mui/material/SvgIcon";
// import SendIcon from "@material-ui/icons/SendIcon";

function Sendbtn(props) {
  return (
    <SvgIcon
      {...props}
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-send"
      viewBox="0 0 16 16"
    >
      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
    </SvgIcon>
  );
}

const marks = [
  {
    value: 10,
    label: "1",
  },
  {
    value: 20,
    label: "2",
  },
  {
    value: 30,
    label: "3",
  },
  {
    value: 40,
    label: "4",
  },
  {
    value: 50,
    label: "5",
  },
  {
    value: 60,
    label: "6",
  },
  {
    value: 70,
    label: "7",
  },
  {
    value: 80,
    label: "8",
  },
  {
    value: 90,
    label: "9",
  },
  {
    value: 100,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}`;
}

function App() {
  return (
    <div className="App">
      <div className="feedbackform">
        <Box sx={{px:2}}>
          <Box>
            <CardMedia
              sx={{
                
                maxWidth: "450px",
                bgcolor: "grey",
                // boxShadow: 2,
                // border: 1,
                borderColor: "primary.main",
              }}
              component="video"
              src={video}
              autoPlay
            ></CardMedia>
          </Box>
        </Box>
        <Box
          sx={{ py:2}}
        >
          <Box sx={{ color: "#03396e", maxWidth:"500px" }}>
            <h2>How satisfied your are ??</h2>
          </Box>
          <Box sx={{ py: 3 }}>
            <Box>
              <Box sx={{ maxWidth: "490px" }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  step={10}
                  valueLabelDisplay="off"
                  marks={marks}
                />
              </Box>
            </Box>
            <Box display="flex" color='#03396e' justifyContent="space-between" fontSize="13px" maxWidth="490px">
              <Box>Not at all likely</Box>
              <Box>Extreamely likely</Box>
            </Box>
          </Box>
          <Box maxWidth="500px" component="form">
            <TextField
              id="filled-multiline-static"
              label="Any message ?"
              multiline
              rows={5}
              variant="filled"
              sx={{
                color:"#03396e",
                bgcolor: "#e9f5f9",
                minWidth: "100%"
              }}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" sx={{ mt: 1,}}>
            <Button  variant="contained" sx={{px:3, fontSize:'15px'}} endIcon={<Sendbtn />}>
              Send
            </Button>
            {/* <Button variant="contained" sx={{px:3, fontSize:'15px'}} endIcon={<SendIcon />}>
              Send
            </Button> */}
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;

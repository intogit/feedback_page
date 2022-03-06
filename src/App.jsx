import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Container, Grid, CardMedia, TextField } from "@mui/material";
import video from "./feed_video.mp4";
import { borderColor, Box, fontFamily, maxWidth } from "@mui/system";
import Slider from "@mui/material/Slider";
import SvgIcon from "@mui/material/SvgIcon";
// import SendIcon from "@material-ui/icons/SendIcon";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";


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
  const [management, setManagement] = React.useState(0);
  const [travel, setTravel] = React.useState(0);
  const [safety, setSafety] = React.useState(0);
  const [accommodation, setAccommodation] = React.useState(0);
  const [guide, setGuide] = React.useState(0);

  return (
    <div className="App">
      <div className="feedbackform">
        <Box sx={{px:2, maxWidth: "40%"}}>
          <Box>
            <CardMedia
              sx={{
                maxWidth: "450px",
                bgcolor: "grey",
                borderColor: "primary.main",
              }}
              component="video"
              src={video}
              autoPlay
            ></CardMedia>
          </Box>
        </Box>
        <Box sx={{ minWidth: "50%" }}>
          <Box
            sx={{
              color: "#03396e",
            }}
          >
            <h2>How satisfied your are ??</h2>
          </Box>
          <Box sx={{ py: 1 }}>
            <Box>
              <Box>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  step={10}
                  valueLabelDisplay="off"
                  marks={marks}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              color="#03396e"
              justifyContent="space-between"
              fontSize="13px"
            >
              <Box sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Not at all likely</Box>
              <Box sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Extreamely likely</Box>
            </Box>
          </Box>
          <Box sx={{my:2}}>
            <Box
              sx={{
                color: "#03396e",
              }}
            >
              <h3>Our Services</h3>
            </Box>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Box sx={{pr:3}}>
                <Typography component="legend" sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Travel</Typography>
                <Rating
                  name="travel"
                  value={travel}
                  onChange={(event, newValue) => {
                    setTravel(newValue);
                  }}
                />
              </Box>
              <Box sx={{pr:3}}>
                <Typography component="legend" sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Guide</Typography>
                <Rating
                  name="guide"
                  value={guide}
                  onChange={(event, newValue) => {
                    setGuide(newValue);
                  }}
                />
              </Box>
              <Box sx={{pr:3}}>
                <Typography component="legend" sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Accommodation</Typography>
                <Rating
                  name="accommodation"
                  value={accommodation}
                  onChange={(event, newValue) => {
                    setAccommodation(newValue);
                  }}
                />
              </Box>
              <Box sx={{pr:3}}>
                <Typography component="legend" sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Management</Typography>
                <Rating
                  name="management"
                  value={management}
                  onChange={(event, newValue) => {
                    setManagement(newValue);
                  }}
                />
              </Box>
              <Box sx={{pr:3}}>
                <Typography component="legend" sx={{fontFamily:"poppins", fontWeight:1000, opacity:.7}}>Safety</Typography>
                <Rating
                  name="safety"
                  value={safety}
                  onChange={(event, newValue) => {
                    setSafety(newValue);
                  }}
                />
              </Box>
            </Box>
          </Box>
          <form>
          <Box
            component="form"
          >
            <TextField
              id="filled-multiline-static"
              label="Please provide your valuable feedback"
              multiline
              rows={3}
              sx={{
                mt: 2,
                color: "#03396e",
                minWidth: "100%",
              }}
            />
          </Box>
          <Box display="block" sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{width: "100%", fontSize: "15px" }}
              endIcon={<Sendbtn />}
            >
              Send
            </Button>
            {/* <Button variant="contained" sx={{px:3, fontSize:'15px'}} endIcon={<SendIcon />}>
              Send
            </Button> */}
          </Box>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default App;

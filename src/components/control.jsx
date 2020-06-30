import React, { useState, useContext, useEffect } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Arraycontext, Totalcontext, Speedcontext } from "../context/contexts";
import "./control.css";
import refresh from "../icon/refresh.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: theme.spacing(-3),
  },
  root1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#ec625f",
      },
      track: {
        color: "#acdbdf",
      },
      rail: {
        color: "#dbd8e3",
      },
    },
  },
});

export default function DiscreteSlider({
  mergesort,
  bubblesort,
  quicksort,
  insertionSort,
  TimeOutLength,
}) {
  const classes = useStyles();
  const [array, setarray] = useContext(Arraycontext);
  const [total, settotal] = useContext(Totalcontext);
  const [speed, setspeed] = useContext(Speedcontext);
  const [OnOff, setOnOff] = useState(false);
  useEffect(() => {
    generate();
  }, [total]);

  const handleSliderChange = (event, newValue) => {
    settotal(newValue);
  };

  function generate() {
    let newarray = [];
    for (let i = 0; i <= total; i++) {
      newarray.push(randomNo(5, 1000));
    }
    setarray(newarray);
  }

  const SpeedSliderChange = (event, newSpeed) => {
    setspeed(newSpeed);
  };

  function randomNo(a, b) {
    return Math.floor(Math.random() * b) + a;
  }

  function showlength() {
    setOnOff(true);

    setTimeout(() => {
      setOnOff(false);
    }, (TimeOutLength() - 1) * speed);
  }

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="control">
      <center>
        <div className="slidercontainer">
          <div className="slider">
            <div className={classes.root} m={0}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <h4>Range</h4>
                </Grid>
                <Grid item xs>
                  <ThemeProvider theme={muiTheme}>
                    <Slider
                      m={0}
                      p={0}
                      defaultValue={50}
                      step={10}
                      marks
                      min={10}
                      max={110}
                      onChange={handleSliderChange}
                      disabled={OnOff}
                    />
                  </ThemeProvider>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="slider">
            <div className={classes.root} m={0}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <h4>fast</h4>
                </Grid>
                <Grid item xs>
                  <ThemeProvider theme={muiTheme}>
                    <Slider
                      m={0}
                      p={0}
                      defaultValue={2}
                      step={20}
                      marks
                      min={2}
                      max={82}
                      onChange={SpeedSliderChange}
                      disabled={OnOff}
                    />
                  </ThemeProvider>
                </Grid>
                <Grid item>
                  <h4>slow</h4>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </center>

      <div className={classes.alignItemsAndJustifyContent}>
        <div className={classes.root1}>
          <ButtonGroup
            size="small"
            color="primary"
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button
              onClick={() => {
                mergesort();
                showlength();
              }}
              disabled={OnOff}
            >
              merge
            </Button>
            <Button
              onClick={() => {
                bubblesort();
                showlength();
              }}
              disabled={OnOff}
            >
              {" "}
              bubble
            </Button>
            <Button
              onClick={() => {
                quicksort();
                showlength();
              }}
              disabled={OnOff}
            >
              quick
            </Button>
            <Button
              onClick={() => {
                insertionSort();
                showlength();
              }}
              disabled={OnOff}
            >
              insertion
            </Button>
            <Button onClick={() => reloadPage()}>
              <img
                src={refresh}
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

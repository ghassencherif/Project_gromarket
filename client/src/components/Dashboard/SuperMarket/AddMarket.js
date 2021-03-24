import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { addMarket } from "../../../JS/actions/marketAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: 10,
  },
}));

export default function AddMarket() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [newMarket, setNewMarket] = useState({
    name: "",
    zipCode: "",
    location: "",
  });
  const handleChange = (e) => {
    setNewMarket({ ...newMarket, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div
              className={classes.input}
              style={{ display: "flex", flexDirection: "column", margin: 5 }}>
              <TextField
                name="name"
                label="Market Name"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                name="location"
                label="Market Location"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                name="zipCode"
                label="Zip Code"
                variant="outlined"
                onChange={handleChange}
              />
            </div>
            <div>
              <Link
                to="/admin/dashboard/SuperMarket"
                style={{ textDecoration: "none" }}>
                <Button className={classes.button} variant="contained">
                  Cancel
                </Button>
              </Link>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => dispatch(addMarket(newMarket))}>
                Add
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

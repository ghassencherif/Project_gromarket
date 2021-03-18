import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function DeliveryBoys() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>Mark Paul</h2>
            <span>Not verified</span>
            <p>Address: Frankfurt</p>
            <Button variant="contained">Show details</Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>Mark Paul</h2>
            <span>Not verified</span>
            <p>Address: Frankfurt</p>
            <Button variant="contained">Show details</Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>Mark Paul</h2>
            <span>Not verified</span>
            <p>Address: Frankfurt</p>
            <Button variant="contained">Show details</Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>Mark Paul</h2>
            <span>Not verified</span>
            <p>Address: Frankfurt</p>
            <Button variant="contained">Show details</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

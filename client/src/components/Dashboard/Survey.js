import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddModal from "./AddModal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Survey() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddModal />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ textAlign: "start" }}>
            <h3>Q1:</h3>
          </Paper>
          <Paper className={classes.paper} style={{ textAlign: "right" }}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ textAlign: "start" }}>
            <h3>Q1:</h3>
          </Paper>
          <Paper className={classes.paper} style={{ textAlign: "right" }}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

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

export default Survey;

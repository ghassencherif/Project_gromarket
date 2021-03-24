import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Route } from "react-router";
import MarketCard from "./SuperMarket/MarketCard";
import { Link } from "react-router-dom";
import AddMarket from "./SuperMarket/AddMarket";

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

export default function SuperMarket() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link
              to="/admin/dashboard/SuperMarket"
              style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 10 }}>
                List Of SuperMarket
              </Button>
            </Link>
            <Link
              to="/admin/dashboard/SuperMarket/addMarket"
              style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 10 }}>
                Add SuperMarket
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Route
          path="/admin/dashboard/SuperMarket"
          exact
          component={MarketCard}
        />
        <Route
          path="/admin/dashboard/SuperMarket/addMarket"
          component={AddMarket}
        />
      </Grid>
    </div>
  );
}

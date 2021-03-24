import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getMarkets, deleteMarket } from "../../../JS/actions/marketAction";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 30,
  },
}));

export default function MarketCard() {
  const classes = useStyles();
  const markets = useSelector((state) => state.markets.markets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarkets());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          {/* {markets.map((market, i) => (
            <Paper className={classes.paper} key={i}>
              <h3>{market.name}</h3>
              <h3>{market.zipCode}</h3>
              <h3>{market.location}</h3>
               <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(deleteMarket(market._id))}>
              Delete
            </Button>
            </Paper>
          ))} */}

          <Paper className={classes.paper}>
            <h3>market name</h3>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

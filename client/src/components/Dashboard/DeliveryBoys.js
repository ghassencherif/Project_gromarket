import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getBoys } from "../../JS/actions/boysAction";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function DeliveryBoys() {
  const classes = useStyles();
  const boys = useSelector((state) => state.boys.boys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoys());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {boys.map((boy, i) => (
          <Grid item xs={3} key={i}>
            <Paper className={classes.paper}>
              <h2>
                {boy.firstName} {boy.lastName}
              </h2>
              {boy.isVerified ? (
                <span>Verified</span>
              ) : (
                <span>Not Verified</span>
              )}
              <p>{boy.address}</p>
              <Link to={`/admin/dashboard/deliveryboy/${boy._id}`}>
                <Button variant="contained">Show details</Button>
              </Link>
            </Paper>
          </Grid>
        ))}
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

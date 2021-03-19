import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddModal from "./AddModal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getSurvey, deleteQuestion } from "../../JS/actions/surveyAction";

function Survey() {
  const classes = useStyles();
  const survey = useSelector((state) => state.surveyAll.survey);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSurvey());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddModal />
        </Grid>
        {survey.map((el, _id) => (
          <Grid item xs={12} key={_id}>
            <Paper className={classes.paper} style={{ textAlign: "start" }}>
              <h3>Q1: {el.question}</h3>
              <span>{el.questionResponces.join(" / ")}</span>
            </Paper>
            <Paper className={classes.paper} style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(deleteQuestion(el._id))}>
                Delete
              </Button>
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

export default Survey;

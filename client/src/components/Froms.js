import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSurvey } from "../JS/actions/surveyAction";
import { getProfile } from "../JS/actions/userAction";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export default function Froms(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const survey = useSelector((state) => state.surveyAll.survey);

  const [surveyAll, setSurveyAll] = useState({});
  const isAuth = useSelector((state) => state.user.isAuth);

  const [question, setQuestion] = useState("");
  const [questionA, setQuestionA] = useState("");
  const [questionResponces, setQuestionResponces] = useState("");
  const [responce, setResponces] = useState("");
  const maxSteps = surveyAll.length;
  const ques = props.survey.question;
  const dispatch = useDispatch();

  useEffect(() => {
    const surveyAll = window.localStorage.getItem("save-survey");
    setSurveyAll(JSON.parse(surveyAll));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("save-survey", JSON.stringify(props.survey));
  });

  useEffect(() => {
    dispatch(getSurvey());
    dispatch(getProfile());
    setQuestion(props.survey.map((el, i) => el));
    console.log(question);
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return !survey || question === "" ? (
    <div className="spinner-border spinner" role="status">
      <span className="sr-only spin">Loading... </span>
    </div>
  ) : (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{surveyAll[activeStep].question} </Typography>
      </Paper>
      <div>
        <Typography style={{ marginLeft: 30 }}>
          {surveyAll[activeStep].questionResponces.map((answer, y) => (
            <div key={y} style={{ margin: 10 }}>
              <input
                type="radio"
                id="other"
                name="gender"
                value={answer}
                onChange={(e) => setResponces(e.target.value)}
              />
              <label>{answer}</label>
            </div>
          ))}
        </Typography>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            value={activeStep === maxSteps - 1 ? "Submit" : "Next"}
            size="small"
            onClick={handleNext}>
            {activeStep === maxSteps - 1 ? "Submit" : "Next"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    maxWidth: 500,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 100,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));

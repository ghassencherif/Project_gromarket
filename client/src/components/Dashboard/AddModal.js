import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { addQuestion } from "../../JS/actions/surveyAction";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function AddModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = useState("");
  const [question, setQuestion] = useState("");
  const [questionResponces, setQuestionResponces] = useState([]);
  const [answerType, setAnswerType] = useState("");
  const [answer, setAnswer] = useState("");

  const addSurvey = (e) => {
    e.preventDefault();
    dispatch(
      addQuestion({
        question,
        questionResponces,
        answerType,
      })
    );
    setQuestionResponces([]);
    handleClose();
  };

  const addAnswer = (newAnswer, e) => {
    e.preventDefault();
    setQuestionResponces([...questionResponces, newAnswer]);
    setAnswer("");
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuestionResponces([]);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ float: "right" }}>
        Add Question
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Question</h2>
            <textarea
              name="question"
              placeholder="Your Question"
              style={{
                height: 150,
                width: 700,
                marginBottom: 5,
              }}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <form>
              <h4>Answer Type:</h4>
              <div>
                <input
                  type="radio"
                  name="answerStyle"
                  value="radio"
                  onChange={(e) => setAnswerType(e.target.value)}
                />
                <labe>One answer</labe>
                <input
                  type="radio"
                  name="answerStyle"
                  value="checkbox"
                  onChange={(e) => setAnswerType(e.target.value)}
                />
                <labe>Multi-Answer</labe>
                <input
                  type="radio"
                  name="answerStyle"
                  value="text"
                  onChange={(e) => setAnswerType(e.target.value)}
                />
                <labe>Text Answer</labe>
                <input
                  type="radio"
                  name="answerStyle"
                  value="radio text"
                  onChange={(e) => setAnswerType(e.target.value)}
                />
                <labe>One answer with Text</labe>
              </div>
              <div style={{ margin: "20px 0px 20px 0px " }}>
                <input
                  name="answer"
                  placeholder="Add answer"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  value={answer}
                  disabled={answerType === "text" ? "disable" : ""}
                />
                <button
                  onClick={(e) => addAnswer(answer, e)}
                  disabled={answerType === "text" ? "disable" : ""}>
                  Add Answer
                </button>
              </div>
              {questionResponces.join(" | ")}
            </form>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                style={{ margin: 5 }}
                onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 5 }}
                onClick={addSurvey}>
                Add
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

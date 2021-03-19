import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSurvey } from "../JS/actions/surveyAction";
import { getProfile } from "../JS/actions/userAction";

function Froms() {
  const survey = useSelector((state) => state.surveyAll.survey);
  const isAuth = useSelector((state) => state.user.isAuth);
  const [question, setQuestion] = useState("");
  const [responce, setResponce] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getSurvey());
  }, []);
  return (
    <div>
      {survey.map((el, i) => (
        <div>
          <h3 key={i}>
            Q{i + 1}: {el.question}
          </h3>
          {el.questionResponces.map((answer, y) => (
            <div key={y}>
              <input
                type="radio"
                id="other"
                name="gender"
                value={answer}
                onChange={(e) => setResponce(e.target.value)}
              />
              <label for="other">{answer}</label>
            </div>
          ))}
        </div>
      ))}
      <button>Send Your Answer</button>
    </div>
  );
}

export default Froms;

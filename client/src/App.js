import React, { useEffect } from "react";
import Header from "./components/Header";
import HireMe from "./components/HireMe";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import Profile from "./components/Profile";
import VerificationProcess from "./components/VerificationProcess";
import Dashboard from "./components/Dashboard/Dashboard";
import DeliveryBoys from "./components/Dashboard/DeliveryBoys";
import Froms from "./components/Froms";
import { getSurvey } from "./JS/actions/surveyAction";

function App() {
  const survey = useSelector((state) => state.surveyAll.survey);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurvey());
  }, []);
  return (
    <div>
      <Header />
      <Route path="/" exact component={HireMe} />
      <Route path="/ProfileUser/" component={Profile} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/Verification" component={VerificationProcess} />
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route
        path="/profile/forms/"
        render={(props) => <Froms survey={survey} {...props} />}
      />
    </div>
  );
}

export default App;

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
import { getProfile } from "./JS/actions/userAction";
import UploadFiles from "./components/UploadFiles";

function App() {
  const survey = useSelector((state) => state.surveyAll.survey);
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurvey());
    dispatch(getProfile());
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
        path="/profile/:id"
        exact
        render={(props) => <Froms surveys={survey} {...props} />}
      />
      <Route path="/profile/upload/:id" exact component={UploadFiles} />
    </div>
  );
}

export default App;

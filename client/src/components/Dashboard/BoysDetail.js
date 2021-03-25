import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoy } from "../../JS/actions/boysAction";

function BoysDetail({ boys, match }) {
  const id = match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoy(id));
  }, []);
  return <div>{}</div>;
}

export default BoysDetail;

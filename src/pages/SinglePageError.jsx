import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <div>
      <h3>{error.message}</h3>
    </div>
  );
};

export default SinglePageError;

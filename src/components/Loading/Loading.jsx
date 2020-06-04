import React from "react";
import classes from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className={classes.center}>
      <div className={classes.Loader}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;

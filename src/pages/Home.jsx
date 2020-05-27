import React, { Fragment } from "react";
import Input from "../components/Input";
import Card from "../components/Card";

const Home = (props) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Fragment>
      <Input />
      <div className="row">
        {arr.map((i, y) => {
          return (
            <div key={y} className="col-sm-4 pb-4">
              <Card />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Home;

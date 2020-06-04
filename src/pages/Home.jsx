import React, { Fragment, useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GithubContext } from "../context/github/githubContext";
import { ModalContext } from "../context/modal/modalContext";
import Confirm from "../components/Confirm/Confirm";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { users, loading } = useContext(GithubContext);
  const { modal } = useContext(ModalContext);

  return (
    <Fragment>
      <Modal />
      {modal.allow ? <Search /> : <Confirm />}
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="col-sm-4 pb-4">
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default Home;

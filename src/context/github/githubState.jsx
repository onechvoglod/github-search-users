import React from "react";
import { GithubContext } from "./githubContext";
import { useReducer } from "react";
import { GithubReducer } from "./githubReducer";
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
} from "../type";

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const search = async (name) => {
    loading();
    //...
    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });
  };

  const getUser = (name) => {
    loading();
    //...
    dispatch({
      type: GET_USER,
      payload: {},
    });
  };

  const getRepos = (value) => {
    loading();
    //...
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const setLoading = (value) =>
    //...
    dispatch({
      type: SET_LOADING,
    });

  const clearUsers = (value) =>
    //...
    dispatch({
      type: CLEAR_USERS,
    });
  const { user, users, repos, loading } = state;
  return (
    <GithubContext.Provider
      value={{
        clearUsers,
        setLoading,
        getRepos,
        getUser,
        search,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;

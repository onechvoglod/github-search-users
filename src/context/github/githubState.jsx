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

  const search = (value) => {
    setLoading();

    fetch(`https://api.github.com/search/users?q=${value}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: SEARCH_USERS, payload: data.items }));
  };

  const getUser = (name) => {
    setLoading();

    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_USER, payload: data }));
  };

  const getRepos = (name) => {
    setLoading();

    fetch(`https://api.github.com/users/${name}/repos?per_page=5`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_REPOS, payload: data }));
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

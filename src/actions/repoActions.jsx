import { REPO_ADDED, REPOS_FETCHED, REMOVE_REPO } from "./types";

export const addRepo = repoToAdd => dispatch => {
  dispatch({ type: REPO_ADDED, payload: repoToAdd });
};

export const fetchRepos = () => dispatch => {
  dispatch({
    type: REPOS_FETCHED
  });
};

export const removeRepo = repoToRemove => dispatch => {
  dispatch({ type: REMOVE_REPO, payload: repoToRemove });
};

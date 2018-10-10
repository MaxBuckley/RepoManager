import { REPO_ADDED, REPOS_FETCHED, REMOVE_REPO } from "../actions/types";
import { loadRepos } from "../localStorage";

const initialState = () => {
  const repos = loadRepos();

  return repos;
};

export default function(state = initialState(), action) {
  switch (action.type) {
    case REPO_ADDED:
      return action.payload;
    case REPOS_FETCHED:
      return state;
    case REMOVE_REPO:
      console.log(action.payload);
      return state.filter(item => item.text !== action.payload);
    default:
      return state;
  }
}

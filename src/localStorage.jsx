export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("repoManager");
    if (serializedState === null) {
      return { repos: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { repos: [] };
  }
};

export const loadRepos = () => {
  const state = loadState();
  if (state.data && state.data.props) {
    try {
      return state.data.repos;
    } catch (err) {
      return { repos: [] };
    }
  }

  return { repos: [] };
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("repoManager", serializedState);
  } catch (err) {
    // ignore error
  }
};

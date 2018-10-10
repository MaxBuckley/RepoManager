import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import "../../css/ListRepo.css";

const ListRepo = ({ repos, handleOnClick }) => {
  const repoList = repos.map(repo => (
    <Button
      content={repo.text}
      icon="delete"
      labelPosition="right"
      className="repoItem"
      key={repo.text}
      onClick={() => {
        handleOnClick(repo);
      }}
    />
  ));

  return <div className="buttonList">{repoList}</div>;
};

ListRepo.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ListRepo;

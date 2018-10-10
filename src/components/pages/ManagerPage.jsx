import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dropdown, Segment, Grid, Message } from "semantic-ui-react";
import "../../css/ManagerPage.css";
import CopyButton from "../utils/CopyButton";

class ManagerPage extends Component {
  state = {
    copied: false
  };

  handleChange = (e, { value }) =>
    this.setState({
      value,
      copied: false
    });

  handleCopyClick = () =>
    this.setState({
      copied: true
    });

  addRepoMessage = () => {
    if (!this.props.repos || this.props.repos.length === 0) {
      return (
        <Message>
          <p>Add a repo using Add Repo tab above.</p>
        </Message>
      );
    }

    return null;
  };

  render() {
    const { copied, value } = this.state;

    const copyButton = () => (
      <CopyButton
        copied={copied}
        handleCopyClick={this.handleCopyClick}
        value={value}
      />
    );

    const buttonRender = () => (
      <div className="item copyRender">
        <Grid className="managerGrid">
          <div className="floated cloneUrl">
            <Segment compact tertiary>
              {value}
            </Segment>
          </div>
          <div>
            {copyButton()}
            <a
              href={value}
              className="ui button visitButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repo
            </a>
          </div>
        </Grid>
      </div>
    );

    return (
      <div>
        <h1>Repo Manager</h1>
        <Dropdown
          onChange={this.handleChange}
          options={this.props.repos}
          noResultsMessage="Please add a repo"
          placeholder="Select a repository"
          search
          fluid
          selection
          value={value}
        />
        {this.addRepoMessage()}
        {value ? buttonRender() : null}
      </div>
    );
  }
}

ManagerPage.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

export default connect(mapStateToProps)(ManagerPage);

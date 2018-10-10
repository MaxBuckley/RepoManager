import React from "react";
import { Button, Form, Label, Divider, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InlineError from "../utils/InlineError";
import ListRepo from "../utils/ListRepo";
import { addRepo, fetchRepos } from "../../actions/repoActions";
import "../../css/AddPage.css";

class AddPage extends React.Component {
  state = {
    key: "",
    text: "",
    value: "",
    errors: {},
    repos: this.props.repos
  };

  componentWillMount = () => {
    this.props.fetchRepos();
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = () => {
    const errors = this.validate(this.state.text, this.state.value);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      const newRepo = {
        text: this.state.text,
        value: this.state.value
      };

      const newRepos = [...this.state.repos, newRepo];
      this.setState({ repos: newRepos });
      this.props.addRepo(newRepos);
    }
  };

  removeRepo = repoToRemove => {
    const filteredRepos = this.state.repos.filter(
      item => item.text !== repoToRemove.text
    );

    this.setState({ repos: filteredRepos });
    this.props.addRepo(filteredRepos);
    window.location.reload();
  };

  validate = (text, value) => {
    const errors = {};
    if (!text) errors.text = "Repo can't be blank";
    if (!value) errors.value = "URL can't be blank";

    if (this.state.repos) {
      const repoSet = new Set(this.state.repos.map(a => a.text));
      if (repoSet.has(text)) {
        errors.duplicate = "Repo name must be unique";
        this.setState({ errors });
      }
    }
    return errors;
  };

  render() {
    const { text, value, errors, repos } = this.state;

    return (
      <div>
        <h2>Add Repo</h2>
        <div>
          <Form onSubmit={this.onSubmit} className="fullWidth">
            {errors.duplicate && (
              <Message negative>
                <p>{errors.duplicate}</p>
              </Message>
            )}
            <Form.Field error={!!errors.text}>
              <Label pointing="below">Enter Repo Display Name</Label>
              <input
                id="text"
                name="text"
                placeholder="Repo Manager"
                className="addLabel"
                value={text}
                onChange={this.onChange}
              />
              {errors.text && <InlineError text={errors.text} />}
            </Form.Field>
            <Form.Field error={!!errors.value}>
              <Label pointing="below">Enter Repo Git URL</Label>
              <input
                id="value"
                name="value"
                type="url"
                placeholder="https://www.github.com/repomanager.git"
                value={value}
                onChange={this.onChange}
              />
              {errors.value && <InlineError text={errors.value} />}
            </Form.Field>
            <Button type="submit" content="Add Repo" />
            <Divider />
          </Form>
        </div>
        {repos ? (
          <Button.Group vertical>
            <ListRepo repos={repos} handleOnClick={this.removeRepo} />
          </Button.Group>
        ) : null}
      </div>
    );
  }
}

AddPage.propTypes = {
  addRepo: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired,
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

export default connect(
  mapStateToProps,
  { addRepo, fetchRepos }
)(AddPage);

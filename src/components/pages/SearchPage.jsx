import React from "react";
import { connect } from "react-redux";
import { Dropdown, Input } from "semantic-ui-react";
import "../../css/SearchPage.css";

const searchRepos = [
  { key: "github", text: "github.com", value: "https://github.com/search?q=" }
];

const SearchPage = () => (
  <div>
    <h1>Search Github</h1>
    <div className="ui focus input searchBox">
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            options={searchRepos}
            defaultValue="cerner"
          />
        }
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />
    </div>
  </div>
);

export default connect()(SearchPage);

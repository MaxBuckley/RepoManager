import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "semantic-ui-react";
import "../../css/CopyButton.css";

const CopyButton = ({ copied, handleCopyClick, value }) => (
  <div className="copyButton">
    <CopyToClipboard text={value} onCopy={() => handleCopyClick()}>
      <Button content="Copy Clone URL" />
    </CopyToClipboard>

    {copied ? <span style={{ color: "#ae5856" }}> Copied</span> : null}
  </div>
);

CopyButton.propTypes = {
  copied: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleCopyClick: PropTypes.func.isRequired
};

export default CopyButton;

import React from "react";
import PropTypes from "prop-types";

function Band(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBandClicked(props.band)}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  );
}

Band.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  band: PropTypes.object,
  whenBandClicked: PropTypes.func
};


export default Band;
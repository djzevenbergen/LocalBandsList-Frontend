import React from "react";
import PropTypes from "prop-types";
// import DateTime from "./DateTime";
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function BandDetail(props) {
  const { band, onClickingDelete } = props;
  return (
    <React.Fragment>

      <h1>{band.name}</h1>
      <h3>{band.genre}</h3>
      <p>{band.bio}</p>
      {/* <button onClick={props.onClickingEdit}>Update Post</button>
      <button className="upVote" onClick={() => props.onClickingDelete(post.id)}>Delete</button> */}

    </React.Fragment >
  )
}

BandDetail.propTypes = {
  band: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

export default BandDetail;
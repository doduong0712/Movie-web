import React from "react";
import PropTypes from "prop-types";
import DiscussHeader from "./DiscussHeader";
import Interact from "../Interact";
//import { FAKE_IMG_USER } from "../../constants/config";

function DiscussItem(props) {
  const { post } = props;

  return (
    <div className="discuss__item">
      <DiscussHeader src={post.avatar} post={post} />

      <div className="discuss__item--body">
        <p className="thinking">{post.post}</p>
      </div>
      <div className="line" />
      <div className="row discuss__item--footer">
        <div className="col-12">
          <Interact hasLabel={true} link={post.like} />
        </div>
      </div>
    </div>
  );
}

DiscussItem.propTypes = {
  post: PropTypes.object.isRequired,
};
DiscussItem.defaultProps = {
  post: {},
};

export default DiscussItem;

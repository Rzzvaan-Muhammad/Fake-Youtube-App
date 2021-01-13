import React, { Component } from "react";
const path = "https://www.youtube.com/embed/";
class VideoPanal extends Component {
  render() {
    const { title, description } = this.props.video.snippet;
    const { videoId } = this.props.video.id;
    const { video } = this.props;
    return (
      <>
        <div className="row videoPanal">
          {video && <iframe title={title} src={path + videoId} />}
        </div>
        <div className="Details">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </>
    );
  }
}

export default VideoPanal;

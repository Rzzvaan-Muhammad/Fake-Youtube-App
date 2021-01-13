import React, { Component } from "react";
class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  render() {
    const { videos, onVideoSelect } = this.props;
    return (
      <>
        <div className="videoList">
          <ul>
            {videos.map((x, index) => (
              <li key={x[index]} onClick={() => onVideoSelect(x)}>
                <div className="row">
                  <div className="col">
                    <img
                      alt={x.snippet.thumbnails.channelTitle}
                      src={x.snippet.thumbnails.medium.url}
                    ></img>
                  </div>
                  <div className="col title">{x.snippet.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default VideoList;

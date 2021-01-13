import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HTTP from "./Api/YoutubeAPI";
import VideoList from "./Components/VideosList";
import VideoPanal from "./Components/VideoPanal";
import Header from "./Components/HeaderComponent";
class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.handleSubmit("pakistan");
  }
  handleSubmit = async (value) => {
    const { data } = await HTTP.get("search", {
      params: {
        q: value,
      },
    });
    this.setState({ videos: data.items, selectedVideo: data.items[0] });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <>
        <Header handleSearch={this.handleSubmit} />
        <section className="section">
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          {selectedVideo && <VideoPanal video={selectedVideo} />}
        </section>
      </>
    );
  }
}

export default App;

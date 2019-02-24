import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  render() {
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={this.props.onVideoSelect}
          video={video}
        />
      );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default VideoList;

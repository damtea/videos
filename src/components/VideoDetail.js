import React, { Component } from "react";

class VideoDetail extends Component {
  state = {};
  render() {
    if (!this.props.video) {
      return <div> Loading ... </div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${
      this.props.video.id.videoId
    }`;
    return (
      <div>
        <div className="ui embed">
          <iframe
            title={this.props.video.snippet.title}
            src={videoSrc}
            key={this.props.video.id.videoId}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;

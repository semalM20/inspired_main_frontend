import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className="video-player">Select a video to play</div>;
  }

  return (
    <div className="video-player">
      {/* <video key={video.url} controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        embedded="true"
        width="1200"
        height="600"
        src={video.url}
        title={video.title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;

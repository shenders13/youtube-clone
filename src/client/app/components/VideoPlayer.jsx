import React from 'react'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const VideoPlayer = ({ video }) => {

  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + video.id} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div className="video-list-entry-views-player">
          <span className="glyphicon glyphicon-eye-open player-stats"></span> {numberWithCommas(video.statistics.viewCount)} views  
          <span className="glyphicon glyphicon-user player-stats left-pad"></span> {video.snippet.channelTitle}  
          <span className="glyphicon glyphicon-thumbs-up player-stats left-pad"></span> {numberWithCommas(video.statistics.likeCount)} upvotes
      </div>
      <div>{video.snippet.description}</div>
    </div>
  </div>
  );
};


VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoPlayer;
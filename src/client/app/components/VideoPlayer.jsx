import React from 'react'
import { numberWithCommas } from './helperfunctions'

const VideoPlayer = ({ video, favouritesHandler }) => {

  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + video.id} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div className='player-stat-row'>
        <div className='col-xs-6 no-left-padding'>
          <div className="video-list-entry-views-player">
              <span className="glyphicon glyphicon-eye-open player-stats"></span> {numberWithCommas(video.statistics.viewCount)} views  
              <span className="glyphicon glyphicon-user player-stats left-pad"></span> {video.snippet.channelTitle}  
              <span className="glyphicon glyphicon-thumbs-up player-stats left-pad"></span> {numberWithCommas(video.statistics.likeCount)} upvotes
          </div>
        </div>
        <div className='col-xs-6'>
          <span className='favourites-button' onClick={(event) => (favouritesHandler(video))}>
           <span className="glyphicon glyphicon-plus"></span> 
              Add to Favourites
          </span>
        </div>
      </div>
      <div className='video-description-player-box'>
        <br />
        <span className='video-description-player'>{video.snippet.description}</span>
      </div>
    </div>
  </div>
  );
};

VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoPlayer;
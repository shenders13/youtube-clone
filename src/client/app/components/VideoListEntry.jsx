import React from 'react';
import { numberWithCommas } from './helperfunctions';

const VideoListEntry = ({ video, clickHandler }) => {
  return (
    <div className="video-list-entry" onClick={function() { clickHandler(video); }}>
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-views">
            <span className="glyphicon glyphicon-eye-open video-icon"></span>{numberWithCommas(video.statistics.viewCount)} views  
            <span className="glyphicon glyphicon-user left-pad"></span> {video.snippet.channelTitle}  
            <span className="glyphicon glyphicon-thumbs-up left-pad"></span> {numberWithCommas(video.statistics.likeCount)} upvotes
        </div>
        <div className="video-list-entry-detail">{video.snippet.description.substring(0,200)}</div>
      </div>
      <hr />
    </div>
  );
};

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
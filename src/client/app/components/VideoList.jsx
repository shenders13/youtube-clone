import React from 'react'
import VideoListEntry from './VideoListEntry.jsx'

const VideoList = ({ videos, clickHandler }) => {
  return (
  <div className="video-list media">
    {videos.map( (video, i) => 
      <VideoListEntry video={video} clickHandler={clickHandler} key={i}/> 
    )}
  </div>
  );
};

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
};

export default VideoList;
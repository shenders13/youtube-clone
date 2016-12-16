import React from 'react'
import VideoListEntry from './VideoListEntry.jsx'

const VideoList = ({ videos }) => {
  return (
  <div className="video-list media">
    {videos.map( (video) => 
      <VideoListEntry video={video} /> 
    )}
  </div>
  );
};

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
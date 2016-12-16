import React from 'react'

const VideoListEntry = ({ video }) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={function() { props.handler(video); }}>{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};
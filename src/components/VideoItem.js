import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
      // console.log(props);
      return (
            <div onClick={e => onVideoSelect(video)} className="item video-item">
                  <img
                        alt={video.snippet.title}
                        className="ui image"
                        src={video.snippet.thumbnails.medium.url}
                  />
                  <div className="content">
                        <div className="header">{video.snippet.title}</div>
                  </div>
            </div>
      );
}

export default VideoItem;

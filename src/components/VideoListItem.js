import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	
	return (
		<li onClick={event => onVideoSelect(video)}>{video.snippet.title}</li>
	);
}

export default VideoListItem;
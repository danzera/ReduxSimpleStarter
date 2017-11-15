import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	// create array of <VideoListItem /> components to be rendered within <VideoList />
	const videos = props.videos.map((video, index, videos) => {
		return <VideoListItem key={video.etag} video={video} />
	});

	return (
		<ul>
			{videos}
		</ul>
	);
}

export default VideoList;
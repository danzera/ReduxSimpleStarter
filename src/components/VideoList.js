import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
	// create array of <VideoListItem /> components to be rendered within <VideoList />
	const videoListItems = videos.map((video, index, videos) => {
		return <VideoListItem
							key={video.etag}
							video={video}
							onVideoSelect={selectedVideo => onVideoSelect(selectedVideo)} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videoListItems}
		</ul>
	);
}

export default VideoList;
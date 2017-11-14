import React from 'react';

const VideoDetails = ({ selectedVideo }) => {
	console.log('rendering VideoDetails for selectedVideo', selectedVideo);
	// alternate return statement while waiting for the async call to the YouTube API
	if (!selectedVideo) {
		return <div>Elevator music...</div>;
	}

	const videoUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
	
	return (
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoUrl}></iframe>
			</div>
			<div className="details">
				<div>{selectedVideo.snippet.title}</div>
				<div>{selectedVideo.snippet.description}</div>
			</div>
		</div>
	);
} // end <VideoDetails />

export default VideoDetails;
import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video){
    return <div> Loading...</div>;
  }

  const videoId= video.id.videoId;
  const url= `https://www.youtube.com/embed/${videoId}`;

  return(
      <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div><strong>Title:</strong> {video.snippet.title}</div>
        <div><strong>Description:</strong> {video.snippet.description}</div>
        <div><strong>Published At:</strong> {video.snippet.publishedAt} </div>
      </div>
    </div>
  );
};
export default VideoDetail;

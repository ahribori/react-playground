import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
        {
            src: 'https://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_5mb.mp4',
            type: 'video/mp4',
        },
    ],
};

class VideoJs extends Component {
    render() {
        return <VideoPlayer {...videoJsOptions} />
    }
}

export default VideoJs;
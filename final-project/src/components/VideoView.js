import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube';

function VideoView(props) {
    const { trailer } = props;
    const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

     const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    return <YouTube videoId={trailer} opts={opts} onReady={_onReady} />;
}

VideoView.propTypes = {

}

export default VideoView


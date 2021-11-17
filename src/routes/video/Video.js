import {React, useState, useRef} from 'react'

import Office from '../../layots/office/Office'
import classes from './../../styles/modules/video-styles.module.scss'
import ReactPlayer from 'react-player'
import NET from '../../network'
import ControlsVideo from './ControlsVideo'

const Video = () =>{
     const [state, setState] = useState({ playing: false, volume: 0, loadedSeconds: 1, playedSeconds: 0 })
     const { playing, volume, loadedSeconds, playedSeconds } = state

     const refPlayer = useRef()

     const handlePlay = () => {
        setState({ ...state, playing: !state.playing })
     }
     const handleVolume = (e) => {
        setState({ ...state, volume: e.target.value })
     }
     const handleProgress = (e) => {
        setState({ ...state, ...e})
     }

     const handleProgressControl = (e) => {
      refPlayer.current.seekTo(Number(e))
     }

    return (
       <Office>
           <div className={classes.videoWrapper}>
               <ReactPlayer 
                url = {`${NET.WEB_URL}/hacking.mp4`}
                playing = {playing}
                controls = {true}
                width="100%"
                height="auto"
                volume={volume}
                ref={refPlayer}
                onProgress={handleProgress}
               />
               <ControlsVideo 
                classes={classes}
                handlePlay={handlePlay}
                handleVolume={handleVolume}
                volume={volume}
                playing={playing}
                loadedSeconds={loadedSeconds}
                playedSeconds={playedSeconds}
                funcs={{
                   progress: handleProgressControl
                }}/>
           </div>
       </Office>
    )
}

export default Video
import React from 'react'
import Progress from './components/Progress'

const ControlsVideo = ({ classes, handlePlay, playing, handleVolume, volume, loadedSeconds, playedSeconds, funcs }) => {
    return (
        <>
            <div 
                className={classes.videoControlsPlayer}
                onClick={handlePlay}> {!playing ? 'Play' : 'Pause'}</div>
            <div 
                className={classes.videoControls}
                >
                <div className={classes.videoControls_header}>
                    <div>
                        <imput 
                        type="range" 
                        value={volume} 
                        min="0" max="1" 
                        step="0.1" 
                        onchange={handleVolume} />
                    </div>
                
                    <div>
                        Full
                    </div>
                </div>
               
               <Progress 
                loadedSeconds={loadedSeconds} 
                playedSeconds={playedSeconds} 
                classes={classes}
                funcChange={funcs.progress}/>
            </div>
        </>
    )
}

export default ControlsVideo
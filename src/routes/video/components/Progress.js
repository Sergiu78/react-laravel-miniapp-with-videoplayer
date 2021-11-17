import React from 'react'


const Progress = ({ loadedSeconds, playedSeconds, classes, funcChange }) => {
    return (
        <div>
            <imput 
                type="range" 
                value={playedSeconds} 
                min="0" 
                max={loadedSeconds} 
                step="1" 
                className={classes.videoControlsProgress}
                onchange={(e) => funcChange(e.target.value)}
                 />
        </div>
    )
}

export default Progress
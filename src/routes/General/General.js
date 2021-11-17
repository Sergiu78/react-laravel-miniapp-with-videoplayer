import React from 'react'
import GeneralView from '../../views/general/GeneralView'
import ContextData from './../../context/Data/ContextData'

const General = () => {

const { stateData } = React.useContext(ContextData)
console.log(stateData)

    return (
        <div>
            <GeneralView />
        </div>
    )
}

export default General
import React, { useState } from 'react'
import Button from '../../components/ui/button/Button'
import Input from '../../components/ui/input/Input'
import classes from './../../styles/views/general-styles.module.scss'


const GeneralView = () => {

    const [value, setValue] = useState({})

    const sendValue = () => {
        console.log('вводимое значение')
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapper__inner}>
                <div>
                    Вход в систему
                </div>
                <div>
                    <Input 
                        value={value}
                        setValue={setValue}
                        name="login"
                        type="text"
                    />
                    <Input 
                        value={value}
                        setValue={setValue}
                        name="password"
                        type="password"
                    />
                </div>
                <div>
                    <Button 
                        text="Вход"
                        onClick={sendValue}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default GeneralView
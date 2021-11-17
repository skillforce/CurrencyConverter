import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {ConvertMode} from './ConvertMode/ConvertMode';


function App() {
    const [amount, setAmount] = useState<string>('')
    const [isConvertMode, setIsConvertMode] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSetInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.currentTarget.value)
    }

    const onSetMode = () => {
        setIsLoading(true)
        setIsConvertMode(true)

    }
    const isDisabled = Number(amount) > 0 && amount != ''
    const correctClassBtn = isDisabled ? '' : 'badBtn'


    return (
        <div>
            {!isConvertMode && <div className={'app_title'}>
                <div className={'app__header'}>Enter amount of Belorussian money</div>
                <input value={amount} onChange={(e) => onSetInputValue(e)} type="number"/>
                <div className={correctClassBtn}>
                    <button disabled={!isDisabled}
                            onClick={onSetMode}>{correctClassBtn ? 'incorrect amount' : 'start convert'}</button>
                </div>

            </div>}
            {isConvertMode && <ConvertMode setIsConvertMode={setIsConvertMode}
                                           isLoading={isLoading}
                                           setIsLoading={setIsLoading}
                                           amount={Number(amount)}/>}
        </div>
    );
}

export default App;

import React, { useState } from 'react'

import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
    const [display, setDisplay] = useState('')
    const [result, setResult] = useState('')
    return (
        <div className='calculator'>
            <p>Calculator</p>
            <Display result={result}/>
            <Keypad result={result} setResult={setResult}/>
        </div>
    )
}

export default Calculator

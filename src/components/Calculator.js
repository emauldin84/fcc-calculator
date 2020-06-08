import React, { useState } from 'react'

import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
    const [equation, setEquation] = useState(null)
    const [action, setAction] = useState('')
    const [result, setResult] = useState('')
    const [appliedValue, setAppliedValue] = useState('')
    console.log('RESULT', result)
    return (
        <div className='calculator'>
            <p>Calculator</p>
            <Display result={result} action={action} appliedValue={appliedValue}/>
            <Keypad 
                result={result} 
                setResult={setResult}
                action={action}
                setAction={setAction}
                appliedValue={appliedValue}
                setAppliedValue={setAppliedValue}

                equation={equation}
                setEquation={setEquation}
                />
        </div>
    )
}

export default Calculator

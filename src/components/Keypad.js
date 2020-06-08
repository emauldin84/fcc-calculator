import React, {useState} from 'react'

const Keypad = ({result, setResult, action, setAction, appliedValue, setAppliedValue}) => {
    const [isResult, setIsResult] = useState(false)
    
    const handleSetResult = (val) => {
        if(!isResult){
            if (val === '.' && !result.includes('.')){
                setResult(prevVal => {
                    return prevVal + val
                })
            } 
            if (val === '0' && result[0] === '0' && result.length === 1){
                return
            } 
            if (val === '0' && result[0] === '0' && result[1] !== 0){
                setResult(prevVal => {
                    return prevVal + val
                })
            } 
            if (val !== '.' && val !== '0' && result[0] === '0'){
                setResult(val)
            }
            else if (val !== '.'){
                setResult(prevVal => {
                    return prevVal + val
                })
            }
        }
        if(isResult){
            if (val === '.' && !result.includes('.')){
                setResult(val)
                setIsResult(false)
            } 
            else if (val !== '.'){
                setResult(val)
                setIsResult(false)
            }
        }
    }
    const handleSetAction = (act) => {
        if (result && appliedValue){
            return
        }
        if (result !== '0') {
            if (act === '-' && action === '-'){
                setAction('+')
            } else {
                setAction(act)

            }
        }
    }
    const handleSetAppliedValue = (val) => {
        if (val === '.' && !result.includes('.')){
            setAppliedValue(prevVal => {
                return prevVal + val
            })
        } if (val !== '.' && val !== '0' && appliedValue[0] === '0'){
            setAppliedValue(val)
        } else if (val !== '.'){
            setAppliedValue(prevVal => {
                return prevVal + val
            })
        }
    }
    const handleSetValues = (val) => {
        if(action){
            handleSetAppliedValue(val)
        }
        if(!action){
            handleSetResult(val)
        }
    }
    const handleClear = () => {
        setResult('0')
        setAction('')
        setAppliedValue('')
    }
    const handleCalculate = () => {
        if(result && action && appliedValue) {
            action = action === 'x' ? '*' : action === '÷' ? '/' : action
            let value = `${Number(result)} ${action} ${appliedValue}`
            setResult(`${eval(value)}`)
            setAction('')
            setAppliedValue('')
            setIsResult(true)
        }
    }
    const handleValueFlip = () => {
        if(!action){
            Number(result) > 0 ? setResult(`-${result}`) : setResult(result.replace('-',''))
        }
        if(action){
            Number(appliedValue) > 0 ? setAppliedValue(`-${appliedValue}`) : setAppliedValue(appliedValue.replace('-',''))
        }
    }

    return (
        <div className='keypad'>
            <div className='row-one'>
                <button id="clear" onClick={handleClear}>AC</button>
                <button onClick={handleValueFlip}>+/-</button>
                <button id="divide" onClick={() => handleSetAction('÷')}>÷</button>
            </div>
            <div className='row-two'>
                <button id="seven" onClick={()=>handleSetValues('7')}>7</button>
                <button id="eight" onClick={()=>handleSetValues('8')}>8</button>
                <button id="nine" onClick={()=>handleSetValues('9')}>9</button>
                <button id="multiply" onClick={() => handleSetAction('x')}>x</button>
            </div>
            <div className='row-three'>
                <button id="four" onClick={()=>handleSetValues('4')}>4</button>
                <button id="five" onClick={()=>handleSetValues('5')}>5</button>
                <button id="six" onClick={()=>handleSetValues('6')}>6</button>
                <button id="subtract" onClick={() => handleSetAction('-')}>-</button>
            </div>
            <div className='row-four'>
                <button id="one" onClick={()=>handleSetValues('1')}>1</button>
                <button id="two" onClick={()=>handleSetValues('2')}>2</button>
                <button id="three" onClick={()=>handleSetValues('3')}>3</button>
                <button id="add" onClick={() => handleSetAction('+')}>+</button>
            </div>
            <div className='row-five'>
                <button id="zero" onClick={()=>handleSetValues('0')}>0</button>
                <button id="decimal" onClick={()=>handleSetValues('.')}>.</button>
                <button id="equals" onClick={handleCalculate}>=</button>
            </div>
        </div>
    )
}

export default Keypad
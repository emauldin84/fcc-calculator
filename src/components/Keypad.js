import React from 'react'

const Keypad = ({result, setResult, action, setAction, appliedValue, setAppliedValue}) => {

    const handleSetResult = (val) => {
        if (val === '.' && !result.includes('.')){
            setResult(prevVal => {
                return prevVal + val
            })
        } else if (val !== '.'){
            setResult(prevVal => {
                return prevVal + val
            })
        }
    }
    const handleSetAction = (act) => {
        if (result && appliedValue){
            return
        }
        if (result) {
            setAction(act)
        }
    }
    const handleSetAppliedValue = (val) => {
        if (val === '.' && !result.includes('.')){
            setAppliedValue(prevVal => {
                return prevVal + val
            })
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
        setResult('')
        setAction('')
        setAppliedValue('')
    }

    return (
        <div className='keypad'>
            <div className='row-one'>
                <button onClick={handleClear}>AC</button>
                <button>+/-</button>
                <button >%</button>
                <button onClick={() => handleSetAction('÷')}>÷</button>
            </div>
            <div className='row-two'>
                <button onClick={()=>handleSetValues('7')}>7</button>
                <button onClick={()=>handleSetValues('8')}>8</button>
                <button onClick={()=>handleSetValues('9')}>9</button>
                <button onClick={() => handleSetAction('x')}>x</button>
            </div>
            <div className='row-three'>
                <button onClick={()=>handleSetValues('4')}>4</button>
                <button onClick={()=>handleSetValues('5')}>5</button>
                <button onClick={()=>handleSetValues('6')}>6</button>
                <button onClick={() => handleSetAction('-')}>-</button>
            </div>
            <div className='row-four'>
                <button onClick={()=>handleSetValues('1')}>1</button>
                <button onClick={()=>handleSetValues('2')}>2</button>
                <button onClick={()=>handleSetValues('3')}>3</button>
                <button onClick={() => handleSetAction('+')}>+</button>
            </div>
            <div className='row-five'>
                <button onClick={()=>handleSetValues('0')}>0</button>
                <button onClick={()=>handleSetValues('.')}>.</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default Keypad
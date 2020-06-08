import React from 'react'

const Keypad = ({result, setResult}) => {


    return (
        <div className='keypad'>
            <div className='row-one'>
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button>÷</button>
            </div>
            <div className='row-two'>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>
            <div className='row-three'>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div className='row-four'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>
            <div className='row-five'>
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default Keypad
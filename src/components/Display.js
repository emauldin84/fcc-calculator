import React from 'react'

const Display = ({result, appliedValue, action}) => {
    return (
        <div className="display">
            <p className='displaytext' id='action'>{action}</p>
            <p className='displaytext' id="display">{action && appliedValue ? appliedValue : result}</p>
        </div>
    )
}

export default Display
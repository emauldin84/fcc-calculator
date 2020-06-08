import React from 'react'

const Display = ({result, appliedValue, action}) => {
    return (
        <div className="display">
            <p>{action}</p>
            <p>{action && appliedValue ? appliedValue : result}</p>
        </div>
    )
}

export default Display
import React, { useState } from 'react'

const Result = ({ data }) => {

    return (
        <div className="result-container">
            <h1>Result Site</h1>
            <p>{data.brand}</p>
        </div>
    )
}

export default Result;
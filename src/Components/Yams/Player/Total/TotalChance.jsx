import React, { useState, useEffect } from 'react'

export default function TotalChance({ index, handleTotalParts }) {

    const [value, setValue] = useState(0)

    useEffect(() => {
        handleTotalParts(index, value)
    }, [value])

    return (
        <li className="group-button input-value">
            <input type="text" value={value} onChange={e => setValue(+e.target.value)}/>
        </li>
    )
}
import React, { useState, useEffect } from 'react'

export default function TotalSum({ handleTotalParts, index }) {

    const [bigSum, setBigSum] = useState(0)
    const [smallSum, setSmallSum] = useState(0)
    const [isCancel, setIsCancel] = useState(false)

    const handleCancel = () => {
        setIsCancel(!isCancel)
        setBigSum(0)
        setSmallSum(0)
    }

    useEffect(() => {
        handleTotalParts(index, (bigSum - smallSum))
    }, [bigSum])

    useEffect(() => {
        handleTotalParts(index, (bigSum - smallSum))
    }, [smallSum])

    return (
        <>
            <InputSum setValue={setBigSum} value={bigSum} isCancel={isCancel} handleCancel={handleCancel} />
            <InputSum setValue={setSmallSum} value={smallSum} isCancel={isCancel} handleCancel={handleCancel} />
            <li className="sub-total">{bigSum - smallSum}</li>
        </>
    )
}

function InputSum({ setValue, value, isCancel, handleCancel }) {

    const cancelClassName = isCancel === true ? ' cancel' : ''

    return (
        <li className="group-button input-value">
            <input
                type="number"
                value={value}
                onChange={e => setValue(+e.target.value)}
                onFocus={() => setValue('')}
                disabled={isCancel === true ? 'disabled' : ''}
                className={cancelClassName}
            />
            <button
                className={'button-point' + cancelClassName}
                onClick={handleCancel}
            >
                X
            </button>
        </li>
    )
}
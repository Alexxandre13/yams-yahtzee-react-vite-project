import React, { useState, useEffect } from 'react'

export default function TotalSpecial({ index, handleTotalParts }) {

    const [subTotal, setSubTotal] = useState([0, 0, 0, 0, 0, 0, 0])
    const [score, setScore] = useState(0)

    const updateScore = (index, newValue) => {
        const arrayUpdated = subTotal
        arrayUpdated[index] = newValue
        setSubTotal(arrayUpdated)
        let subTotalCalc = 0
        subTotal.map(score => subTotalCalc += score)
        setScore(subTotalCalc)
    }

    // Total calculation
    useEffect(() => {
        handleTotalParts(index, score)
    }, [score])

    return (
        <>
            <MultPoint index={0} mult={3} updateScore={updateScore} />
            <MultPoint index={1} mult={4} updateScore={updateScore} />
            <BoolPoint index={2} name={'Full'} score={25} updateScore={updateScore} />
            <BoolPoint index={3} name={'Petite Suite'} score={30} updateScore={updateScore} />
            <BoolPoint index={4} name={'Grande Suite'} score={40} updateScore={updateScore} />
            <BoolPoint index={5} name={'Yams'} score={50} updateScore={updateScore} />
            <BoolPoint index={6} name={'Rigole'} score={50} updateScore={updateScore} />
        </>
    )
}

function BoolPoint({ index, score, updateScore }) {

    const [active, setActive] = useState(false)
    const [isCancel, setIsCancel] = useState(false)

    const activeClassName = active === true ? ' selected' : ''
    const cancelClassName = isCancel === true ? ' cancel' : ''

    const handleOnClick = () => {
        setActive(!active)
        if (active === true) {
            updateScore(index, 0)
        } else {
            updateScore(index, score)
        }
    }

    return (
        <li>
            <button
                disabled={isCancel === true ? 'disabled' : ''}
                className={'button-point' + activeClassName + cancelClassName}
                onClick={handleOnClick}
            >
                &#10003;
                {/* https://www.toptal.com/designers/htmlarrows/symbols/check-mark/ */}
            </button>
            <button
                className={'button-point' + cancelClassName}
                onClick={() => setIsCancel(!isCancel)}
            >
                X
            </button>
        </li>
    )
}

function MultPoint({ index, mult, updateScore }) {

    const values = [1, 2, 3, 4, 5, 6]

    const [active, setActive] = useState(false)
    const [valueSelected, setValueSelected] = useState(0)
    const [isCancel, setIsCancel] = useState(false)
    const cancelClassName = isCancel === true ? ' cancel' : ''

    const handleOnClick = value => {
        setValueSelected(0)
        setActive(!active)
        if (active === true) {
            updateScore(index, 0)
            setValueSelected(0)
        } else {
            setValueSelected(value)    
            updateScore(index, value * mult)
        }
    }

    return (
        <li>
            {values.map((value, i) =>
                <button
                    key={i}
                    disabled={isCancel === true ? 'disabled' : ''}
                    className={(value === valueSelected ? 'button-point selected' : 'button-point') + cancelClassName}
                    onClick={() => handleOnClick(value)}
                >
                    {value}
                </button>)
            }
            <button
                className={'button-point' + cancelClassName}
                onClick={() => setIsCancel(!isCancel)}
            >
                X
            </button>
        </li>
    )
}
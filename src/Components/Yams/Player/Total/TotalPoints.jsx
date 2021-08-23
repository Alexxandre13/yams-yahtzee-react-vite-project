import React, { useState, useEffect } from 'react'

export default function TotalPoints({ index, handleTotalParts }) {

    const points = [1, 2, 3, 4, 5, 6]
    const [nbOfDice, setNbOfDice] = useState([0, 0, 0, 0, 0, 0])
    const [subTotal, setSubTotal] = useState(0)

    const updateNbOfDice = (index, value) => {
        const arrayUpdated = nbOfDice
        arrayUpdated[index] = value
        setNbOfDice(arrayUpdated)
    }

    const handleSetSubTotal = () => {
        // SubTotal calculation
        let subTotalCalc = 0
        points.map((point, i) => subTotalCalc += nbOfDice[i] * point)
        // Bonus
        const bonus = subTotalCalc > 62 ? 35 : 0
        setSubTotal(subTotalCalc + bonus)
    }

    // Total calculation
    useEffect(() => {
        handleTotalParts(index, subTotal)
    }, [subTotal])

    return (
        <>
            {points.map((point, i) =>
                <Points
                    key={i}
                    index={i}
                    value={point}
                    handleSetSubTotal={handleSetSubTotal}
                    updateNbOfDice={updateNbOfDice}
                />
            )}
            <li className="sub-total">
                <strong>
                    {subTotal > 62 ? `${subTotal - 35} + 35 = ${subTotal}` : subTotal}
                </strong>
            </li>

        </>
    )
}

function Points({ value, handleSetSubTotal, updateNbOfDice, index }) {

    const numberOfDices = [1, 2, 3, 4, 5]
    const [diceSelected, setDiceSelected] = useState(0)
    const [isCancel, setIsCancel] = useState(false)

    const handleClick = (e, i, diceFace) => {
        const elClassList = e.target.classList

        if (elClassList.contains('selected')) {
            elClassList.remove('selected')
            setDiceSelected(0)
            updateNbOfDice(i, 0)
        } else {
            setDiceSelected(diceFace)
            updateNbOfDice(i, diceFace)
        }
        handleSetSubTotal()
    }

    const cancelClassName = isCancel === true ? ' cancel' : ''

    return (
        <li className="group-button">
            {numberOfDices.map((diceFace, i) =>
                <button
                    disabled={isCancel === true ? 'disabled' : ''}
                    className={(diceFace === diceSelected ? 'button-point selected' : 'button-point') + cancelClassName}
                    key={i}
                    onClick={e => { handleClick(e, index, diceFace) }}
                >
                    {diceFace}
                </button>
            )}
            <button
                className={'button-point' + cancelClassName}
                onClick={() => setIsCancel(!isCancel)}
            >
                X
            </button>
        </li>
    )
}
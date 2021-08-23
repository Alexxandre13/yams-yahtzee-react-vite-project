import React, { useState } from 'react'
import TotalPoints from './Total/TotalPoints'
import TotalSpecial from './Total/TotalSpecial'
import TotalChance from './Total/TotalChance'
import TotalSum from './Total/TotalSum'

export default function Player({ player }) {

    const [totalParts, setTotalParts] = useState([0, 0, 0, 0])
    const [totalSum, setTotalSum] = useState(0)

    const handleTotalParts = (i, value) => {
        const arrayUpdated = totalParts
        arrayUpdated[i] = value
        setTotalParts(arrayUpdated)
        let total = 0
        totalParts.map(part => total += part)
        setTotalSum(total)
        // console.log(totalParts, totalSum)
    }

    return (
        <ul className="score-player">
            <li><h3>{player}</h3></li>
            <TotalPoints
                index={0}
                handleTotalParts={handleTotalParts}
            />
            <TotalSpecial
                index={1}
                handleTotalParts={handleTotalParts}
            />
            <TotalSum
                index={2}
                handleTotalParts={handleTotalParts}
            />
            <TotalChance
                index={3}
                handleTotalParts={handleTotalParts}
            />
            <li className="total-of-totals">{totalSum}</li>
        </ul>
    )
}
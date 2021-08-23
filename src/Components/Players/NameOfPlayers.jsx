import React, { useState } from 'react'

export default function NameOfPlayers({
    numberOfPlayers,
    setNameOfPlayers,
    GAME_PHASES,
    changeGamePhase
}) {

    const playersName = []
    for (let i = 0; i < numberOfPlayers; i++) playersName.push('')

    const [names, setNames] = useState(playersName)

    const changePlayerName = e => {
        const index = e.target.name
        const playerName = e.target.value
        const updatedArray = [...names]
        updatedArray[index] = playerName
        setNames(updatedArray)
    }

    const handleNextPhase = () => {
        setNameOfPlayers(names)
        changeGamePhase(GAME_PHASES._3_YAMS_GAME)
    }

    return (<main>
        <h1>Yams</h1>
        <h2>Nom des joueurs :</h2>
        {names.map((player, i) =>
            <input
                key={i}
                value={names[i]}
                name={i}
                onChange={changePlayerName}
            />
        )}
        <button onClick={handleNextPhase}>C'est bon !</button>
    </main>
    )
}
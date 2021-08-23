import React, { useState } from 'react'
import NumberOfPlayers from '../Players/NumberOfPlayers'
import NameOfPlayers from '../Players/NameOfPlayers'
import Game from '../Yams/Game'

export default function App() {

    const GAME_PHASES = {
        _1_NUMBER_OF_PLAYERS: '_1_NUMBER_OF_PLAYERS',
        _2_NAMES_OF_PLAYERS: '_2_NAMES_OF_PLAYERS',
        _3_YAMS_GAME: '_3_YAMS_GAME'
    }

    const [gamePhase, setGamePhase] = useState(GAME_PHASES._1_NUMBER_OF_PLAYERS)
    const [numberOfPlayers, setNumberOfPlayers] = useState(2)
    const [playersName, setPlayersName] = useState([])

    const changeGamePhase = phase => setGamePhase(phase)
    const handleNumberOfPlayers = int => setNumberOfPlayers(int)
    const handleNameOfPlayers = array => setPlayersName(array)

    return (<>

        {gamePhase === GAME_PHASES._1_NUMBER_OF_PLAYERS &&
            <NumberOfPlayers
                setPlayersNumber={handleNumberOfPlayers}
                GAME_PHASES={GAME_PHASES}
                changeGamePhase={changeGamePhase}
            />
        }

        {gamePhase === GAME_PHASES._2_NAMES_OF_PLAYERS &&
            <NameOfPlayers
                numberOfPlayers={numberOfPlayers}
                setNameOfPlayers={handleNameOfPlayers}
                GAME_PHASES={GAME_PHASES}
                changeGamePhase={changeGamePhase}
            />
        }

        {gamePhase === GAME_PHASES._3_YAMS_GAME &&
            <Game
                players={playersName}
            />
        }
        
    </>)
}
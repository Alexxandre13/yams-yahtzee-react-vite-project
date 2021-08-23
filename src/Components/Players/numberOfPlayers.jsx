import React, { useState } from 'react'
import './numberOfPlayers.css'

export default function NumberOfPlayers({ setPlayersNumber, GAME_PHASES, changeGamePhase }) {

  const minPlayers = 2
  const maxPlayers = 9

  const [players, setPlayers] = useState(minPlayers)

  const add = () => {
    setPlayers(players + 1)
    players >= maxPlayers && setPlayers(maxPlayers)
  }

  const sub = () => {
    setPlayers(players - 1)
    players <= minPlayers && setPlayers(minPlayers)
  }

  const handleNextPhase = () => {
    setPlayersNumber(players)
    changeGamePhase(GAME_PHASES._2_NAMES_OF_PLAYERS)
  }

  return (<main>
    <h1>Yams</h1>
    <div className="players">
      <h2>Choisir le nombre de joueurs : {players}</h2>
      <div className="addAndSub">
        <button className="add" onClick={add}>+</button>
        <button className="sub" onClick={sub}>-</button>
      </div>
    </div>
    <button onClick={handleNextPhase}>C'est parti !</button>
  </main>
  )
}
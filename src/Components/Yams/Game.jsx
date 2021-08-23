import React, { useState } from 'react'
import Player from './Player/Player'
import ScoreLabel from './ScoreLabel'

export default function Game({ players }) {

  // const YAMS_PHASES = {
  //   _1_START_GAME: '_1_START_GAME',
  //   _2_END_GAME: '_2_END_GAME'
  // }

  const [gameID, setGameID] = useState(1)

  const resetGame = () => {
    setGameID(gameID + 1)
  }

  return (
    <div className="game">
      <ScoreLabel resetGame={resetGame} />
      <div className="score-group" key={gameID}>
        {players.map((player, i) => <Player key={i} player={player} />)}
      </div>
    </div>
  )
}
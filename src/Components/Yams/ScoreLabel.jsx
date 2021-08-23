import React from 'react'

export default function ScoreLabel({ resetGame }) {

    const points = [
        '1 x',
        '2 x',
        '3 x',
        '4 x',
        '5 x',
        '6 x',
        'Sous-total - Bonus si > à 62',
    ]

    const special = [
        'Brelan - 3 x',
        'Carré - 4 x',
        'Full (25 pts)',
        'Petite Suite (30 pts)',
        'Grande suite (40 pts)',
        'Yams (50 pts)',
        'Rigole (50 pts)'
    ]

    const sum = [
        'Grande somme',
        'Petite somme',
        'Total sommes (Grande - Petite)'
    ]

    const chance = ['Chance']

    return (
        <ul className="group-score-label">
            <li className="reset">
                <button onClick={resetGame}>Rejouer ?</button>
            </li>
            {[].concat(points, special, sum, chance).map((item, i) =>
                <li key={i}>{item}</li>
            )}
            <li>TOTAL</li>
        </ul>
    )
}
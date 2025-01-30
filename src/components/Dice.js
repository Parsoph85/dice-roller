// src/components/Dice.js
import React, { useState } from 'react';
import './Dice.css'; // Подключение CSS

const Dice = () => {
    const [number, setNumber] = useState(1);

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setNumber(randomNumber);
    };

    return (
        <div className="dice-container">
            <img src={`./images/dice${number}.png`} alt={`Dice showing ${number}`} />
            <button onClick={rollDice}>Бросить кубик</button>
        </div>
    );
};

export default Dice;
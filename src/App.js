import React from 'react';
import Dice from './components/Dice';

const App = () => {
    return (
        <div className="app">
            <h1>Игральная кость</h1>
            <Dice />
        </div>
    );
};

export default App;
import React, { useState } from "react";
import { useEffect } from "react";
import "./Style.css"

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function App() {

    const [color, setColor] = useState("");
    const [hexcerto, setHexcerto] = useState([]);

    const [result, setResult] = useState(undefined);

    const generateColor = () => {
        const actualColor = getRandomColor();
        setColor(actualColor);
        setHexcerto([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 < Math.random()));
    }

    useEffect(() => {
        generateColor();
    }, []);

    const handleHexClick = (hexcerto) => {
        if(hexcerto === color){
            setResult(true);
            generateColor();
        } else {
            setResult(false);
        }
    }

    return <div className="App">
        <div className="col">
            
            <div className="guess" style={{ background: color }}></div>
            {hexcerto.map(hexcerto => (
                <button 
                onClick={() => handleHexClick(hexcerto)}
                key={hexcerto}>{hexcerto}</button>
            ))}

            {result === false && <div className="errada">Resposta Errada!</div>}
            {result === true && <div className="correta">Resposta Certa!</div>}
        </div>
    </div>
}

export default App;
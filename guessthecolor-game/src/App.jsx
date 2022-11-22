import React, { useState } from "react";
import { useEffect } from "react";
import "./Style.css"


function App() {

    const [color, setColor] = useState("");
    const [hexcerto, setHexcerto] = useState("");

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getHexCerto = () => {
        var hexcerto = {color};
        console.log({hexcerto})
        
        return hexcerto;
    }
    useEffect(() => {
        const actualColor = getRandomColor();
        setColor(actualColor);
    }, []);

    return <div className="App">
        <div className="guess"
            style={{ background: color }}>
        </div>
        <button>asdasdsdada</button>
        <button>asdasdasdda</button>
        <button>aasdsadadsa</button>
    </div>
}

export default App;
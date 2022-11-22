import React, { useState } from "react";
import { useEffect } from "react";
import "./Style.css"


function App() {

    const [color, setColor] = useState("");

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
      }

    useEffect(() => {
        setColor(getRandomColor())
    }, []);

    return <div className="App">
        <div className="guess"
        style={{ background:color }}>

        </div>
    </div>
}

export default App;
import React from "react";
import Hello from "./Hello";


function App() {
    const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    console.log(color);
    console.log(count);

    React.useEffect(() => {
        sessionStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('count', JSON.stringify(count));
        const interval = setInterval(() =>
            setTime(new Date().toLocaleTimeString(), 1000));
        return () => {
            clearInterval(interval);
        }
    }, [color, count, time]);
    return (<div>
            <DisplayMessage color={color}/>
            <Clock time = {time}/>
            <p>{count}</p>
            <button onClick={() => {
                setColor(toggle(color));
                setCount(count + 1)
            }}>
                Click me React Main1
            </button>
        </div>
    );
}

function toggle(color) {
    if (color === "blue") {
        return "red";
    } else if (color === "red") {
        return "green";
    } else {
        return "blue";
    }
}

function DisplayMessage(props) {
    return <h1 style={{color: props.color}}>Hello React World</h1>;
}


function Clock(props) {
    return <p>React Clock: {props.time} </p>
}

export default App;

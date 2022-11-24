import React,{useEffect,useState} from "react";
import Hello from "./Hello";


function App() {
    const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);

    console.log(color);
    console.log(count);

    useEffect(() => {
        sessionStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('count', JSON.stringify(count));

    }, [color, count]);
    return (
        <div>
            <DisplayMessage color={color}/>
            <Clock/>
            <CounterDisplay count ={count}/>
            <UserActions
                setColor={setColor}
                setCount={setCount}
                count={count}
                color={color}/>
        </div>
    );


}


function CounterDisplay(props){
    return(
        <p>
            {props.count}
        </p>
    )
}


function UserActions(props) {
    const handleOnClick = () =>{
        props.setColor(toggle(props.color));
        props.setCount(props.count + 1)
    }
    return (
        <button onClick={handleOnClick}>
            Click me React
        </button>
    )
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
    const [time, setTime] = useState(
        new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() =>
            setTime(new Date().toLocaleTimeString(), 1000));
        return () => {
            clearInterval(interval);
        }
    }, [time]);

    return <p>React Clock: {time} </p>
}

export default App;

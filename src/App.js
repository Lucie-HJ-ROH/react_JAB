import React  from "react";
import Hello from "./Hello";


function App() {
    const [color, setColor] = React.useState("blue");
    const [count, setCount] = React.useState(0);
    console.log(color);
    console.log(count);
    return (<div>
            <DisplayMessage color={color}/>
            <Clock time={new Date().toLocaleTimeString()}/>
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

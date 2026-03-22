import React, { useEffect } from "react";

export default function UseStateUseEffect() {
    const [count, setCount] = React.useState(0);

     React.useEffect(() => {
        console.log("Component mounted", "Current count:", count);
          
    }, [count]);


    useEffect(() => {

        return () => {
            console.log("Component will unmount:");
        }

    },[]);

    return (<>
        <div style={{ padding: "20px" }}>
            <h2>useState & useEffect</h2>
            <p>This page will cover the basics of useState and useEffect hooks.</p>
        </div>
            <div style={{ padding: "20px" }}>
                <h3>Counter Example</h3>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</button>
                <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</button>
            </div>

    </>
    );
}
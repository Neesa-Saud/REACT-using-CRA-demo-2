import {useState} from "react";
function MyCounter()
{
    const [counter,setCounter]= useState(0);
    const increment=()=>
    {
        setCounter(counter +1);
    }
    return(
        <div>
            <section>Count is :{counter}</section>
            <button onClick={increment}> Increment Count</button>
        </div>
    )
}
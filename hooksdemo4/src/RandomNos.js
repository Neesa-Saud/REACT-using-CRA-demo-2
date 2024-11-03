import {useState} from "react";
function RandomNos()
{
    const[arr,setArr] = useState([]);
    const addNumber =(event)=>
    {
        let n = Math.floor(Math.random()*10)+1;
        setArr([...arr,n]);
    }
    return(
        <div>
            <button onClick={addNumber}>Gen Random Num</button>
            <ul>
                {arr.map((x,index)=>{
                    <li key={index}>{x}</li>
                })}
            </ul>
        </div>
    )
}
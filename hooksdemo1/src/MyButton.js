import {useState} from "react"
function MyButton()
{
    const [text,setText] = useState("ClickMe")
    function changeText ()
    {
    setText(new Date().toLocaleString);
    }
    return(
        <div>
            <button onClick={changeText}>{text}</button>
        </div>
    )
}
export default MyButton ;
import {useState} from "react";
function Greeting()
{
    const [fullName,setFullName] = useState({firstName:"",lastName:""});
    const handleFirstName = (event)=>
    {
        setFullName({...fullName,firstName: event.target.value});
    };
    const handleLastName = (event) =>{
        setLastName({...fullName,lastName: event.target.value});
    };
    return(
        <div>
            FirstName : <br/>
            <input type="text" value ={fullName.firstName} onChange={handleFirstName}/>
            <br/>
            LastName : <br/>
            <input type="text" value ={fullName.lastName} onChange={handleLastName}/>
            <br/>
            {(fullName.firstName.length>0 || fullName.lastName.length>0 &&
            <span>
            Hello {firstName} {lastName}
            </span>
            )}
        </div>
    )
}
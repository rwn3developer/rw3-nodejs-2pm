import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
    
        try{
            let data = await fetch(`http://localhost:8000/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            })
            let res = await data.json();
            alert("record add");
            navigate('/');
        }catch(err){
            console.log(err);
            return false;
        }
        
        
    }

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={ (e) => setName(e.target.value) } value={name}/></td>
                    </tr>
                    <tr>
                        <td>Email :- </td>
                        <td><input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/></td>
                    </tr>
                    <tr>
                        <td>Password :- </td>
                        <td><input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Add

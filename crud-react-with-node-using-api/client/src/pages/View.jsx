import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

    const [users,setUsers] = useState([]);
    const navigate = useNavigate()

    const fetchUser = async() => {
        try{
            let data = await fetch(`http://localhost:8000/fetchuser`,{
                method : 'GET',
            });
            let response = await data.json();
            setUsers(response.users);
            
        }catch(err){
            console.log(err);
            return false;
        }
    }
    
    useEffect(()=>{
        fetchUser();
    },[])

    const handleDelete = async(id) => {
        try{
            let data = await fetch(`http://localhost:8000/deleteuser?deleteid=${id}`,{
                method : 'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                },  
            })
            let response = await data.json();
            if(response.success){
                alert(response.message)
                fetchUser();
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }

   

  return (
    <div align="center">
        <h2>View Users</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((val,index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>
                                    <button onClick={ () => handleDelete(val._id) }>Delete</button>
                                    <button onClick={ () => navigate(`/edit`,{state:val}) }>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default View

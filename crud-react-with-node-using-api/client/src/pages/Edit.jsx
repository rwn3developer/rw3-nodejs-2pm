import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    
    const [editid, setEditId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setName(location?.state?.name || "");
        setEmail(location?.state?.email || "");
        setPassword(location?.state?.password || "");
        setEditId(location?.state?._id || "");
    }, [location?.state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/updateuser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    editid: editid,
                    name: name,
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div align="center">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={editid} />
                <table border={1}>
                    <tbody>
                        <tr key="name-row">
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr key="email-row">
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </td>
                        </tr>
                        <tr key="password-row">
                            <td>Password:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </td>
                        </tr>
                        <tr key="submit-row">
                            <td></td>
                            <td><input type="submit" value="Update User" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Edit;

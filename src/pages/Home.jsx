import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from "../components/User.jsx"
import { Link } from "react-router-dom";

function Home() { 
   const [users, setUsers] = useState([])

 async function fetchUsers() {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
     setUsers(data);
     console.log(data);
 }

 useEffect(() => { 
    fetchUsers();
}, []);

const pixels = "3px";

return (
    <div>
    {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
    <User
    pixels={pixels}
    key={user.id}
    id={user.id}
    name={user.name}
    email={user.email}
    username={user.username} 
    />
    </Link>
    ))}
     </div>  
 );
}   

export default Home
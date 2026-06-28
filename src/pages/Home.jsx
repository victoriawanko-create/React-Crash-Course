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

function renderUsers() {
    return (
    <div>
    {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
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
    
function renderSkeletonLoading() {
    return <h1>Loading...</h1>
}

const pixels = "3px"; 

return (
    <div>
        {users.length ? renderUsers() : <h1>Loading...</h1>}
    </div>
)
}


export default Home
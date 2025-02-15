import React from 'react';
import {IUsers} from "@/models/users-model/IUsers";



const UsersPage = async () => {

   const users = await fetch('http://localhost:3000/login/users').then(res=>res.json())

    return (
        <div>
            {users.map((user:IUsers)=>(<div key={user.id}>{user.username}</div>))}

        </div>
    );
};

export default UsersPage;
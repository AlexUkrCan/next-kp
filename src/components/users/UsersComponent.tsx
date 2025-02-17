
import {IUsers} from "@/models/users-model/IUsers";
import React from "react";

import { FC } from 'react';
import {getAllUsers} from "@/services/api.service";


type UserPropsType={
    user:IUsers[];
}

export const UsersComponent:FC<UserPropsType> = async ({user}:UserPropsType) => {

    console.log(user)
    const users = await getAllUsers();
    console.log(users);

    return (
        <div>

            {
                users.map((user) => <div key={user.id}>{user.firstName}  {user.lastName}</div>)
            }

        </div>
    );
};

export default  UsersComponent;
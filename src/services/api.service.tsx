

import {IUsers} from "@/models/users-model/IUsers";

export const getAllUsers = async ():Promise<IUsers[]> =>{
    const users = await fetch('https://dummyjson.com/users')
        .then(value => value.json())

    return users;
}
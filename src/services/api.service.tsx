
import {IUsersObjects} from "@/models/users-model/IUsersObjects";
import {IUsers} from "@/models/users-model/IUsers";




export const getAllUsers = async ():Promise<IUsers[]> =>{
    const usersAll = await fetch('https://dummyjson.com/users')
        .then(value => value.json())
        .then(({users}:IUsersObjects)=>{
            return users;

    });
    return usersAll;

}
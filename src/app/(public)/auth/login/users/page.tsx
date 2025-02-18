'use server'
import React from 'react';
import {UsersComponent} from "@/components/users/UsersComponent";
import {IUsers} from "@/models/users-model/IUsers";


const UsersPage = async ({users}:{users:IUsers[]}) => {

    return (
        <div>
            <UsersComponent user={users}/>
        </div>
    );

};

export default UsersPage;
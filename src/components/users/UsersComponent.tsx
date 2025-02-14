import {getAllUsers} from "@/services/api.service";




export const UsersComponent = async () => {

    const users = await getAllUsers();
    console.log(users);

    return (
        <div>
            {

            }

        </div>
    );
};
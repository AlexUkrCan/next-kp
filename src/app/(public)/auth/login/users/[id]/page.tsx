
import {IUsers} from "@/models/users-model/IUsers";


async function getUsersData(id: string) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch recipe data');
    }
    return res.json();
}

const UserPage = async ({ params }: { params: { id: string } }) => {
    const user:IUsers = await getUsersData(params.id);

    return (
        <div>
            <h1>{user.firstName}</h1>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
            <p>{user.birthDate}</p>
            <p>{user.bloodGroup}</p>
            <p>{user.email}</p>

            {/* Вивести інші деталі рецепта */}
        </div>
    );
};

export default UserPage;

// const UserPage = () => {
//     return (
//         <div>
//             User page content
//         </div>
//     );
// };
//
// export default UserPage;
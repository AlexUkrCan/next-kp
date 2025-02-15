


export  async function getAllUsers()  {
    const users = await fetch('https://dummyjson.com/users')
        .then(value => value.json())

    return Response.json(users);

}

// export async function GET(){
//
//     const users = await fetch('https://dummyjson.com/users')
//         .then(value => value.json())
//
//
//
//     return Response.json(users);
// }
'use server'
import React from 'react';
import {UsersComponent} from "@/components/users/UsersComponent";
import SearchForm from "@/components/client-component/SearchForm";


 const fetchUsers = async (searchQuery: string) => {
    // Отримуємо користувачів з API DummyJSON
    const res = await fetch(`https://dummyjson.com/users?q=${searchQuery}`);
    const data = await res.json();
    return data.users;
};


const UsersPage = async ( { searchQuery }: { searchQuery: string }) => {



    const users = await fetchUsers(searchQuery);

    return (

            <div>
                <h1>Список користувачів</h1>

                {/* Клієнтський компонент для пошуку */}
                <SearchForm defaultQuery={searchQuery} />

                {/* Виведення списку користувачів */}
                <ul>
                    {users.length === 0 ? (
                        <li>Немає користувачів за запитом.</li>
                    ) : (

                        <div key={users.id}>
                            <UsersComponent user={users}/>
                        </div>


                    )}
                </ul>

            </div>

    );
};


// return (
//         <div>
//             <UsersComponent user={users}/>
//         </div>
    // );

// };

export default UsersPage;
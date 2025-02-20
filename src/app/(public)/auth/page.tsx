
'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "@/app/validator/user-validator";
import {getProtectedData, login, LoginData} from "@/services/api.auth-service";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

const AuthorizationPage = () => {
    const { handleSubmit, register, formState: { isValid }, reset } = useForm<LoginData>({
        mode: 'all', resolver: joiResolver(userValidator)
    });
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!Cookies.get('token')) {
            router.push('/auth/login'); // Якщо токен не знайдено, переходимо на сторінку логіну
        }
    }, [router]);


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


    const customHandler = async (data: LoginData) => {
        console.log(data)
        const loginData:LoginData = {
            username:data.username,
            password:data.password,
            expiresInMins:1,
        };

        login(loginData);


        try {
            const response = await fetch('https://dummyjson.com/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {


                getProtectedData();

                window.location.href = '/auth/login';
            } else {
                const result = await response.json();
                console.log(result.message || 'Невірні дані');
            }
        } catch (error) {
            console.error('Login failed', error);
            console.log('Сталася помилка при логіні');
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label className={'block'}>
                    <input className={'border-2 border-black'} type="text" {...register('username')} placeholder="username" />
                </label>
                <label>
                    <input className={'border-2 border-black'} type="text" {...register('password')} placeholder="password" />
                </label>
                <br />
                <button className={'border-2 bg-green-300 '} disabled={!isValid}>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default AuthorizationPage;













// 'use client'
// import React, {useEffect, useState} from 'react';
//
// import {login, LoginData} from "@/services/api.auth-service";
// import {useForm} from "react-hook-form";
// import userValidator from "@/app/validator/user-validator";
// import {joiResolver} from "@hookform/resolvers/joi";
// import {useRouter} from "next/compat/router";
//
//
// const AuthorizationPage = () => {
//
//     const {handleSubmit, register, formState:{ isValid},reset}  =
//         useForm<LoginData>({mode:'all', resolver:joiResolver(userValidator)});
//
//     const [isClient, setIsClient] = useState(false);
//     const router = useRouter();
//
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     if (!isClient) {
//         return null; // або показати лоадер
//     }
//
//
//
//
//     const customHandler = (data:LoginData,
//     ) => {
//
//
//         console.log(data)
//         const loginData:LoginData = {
//             username:data.username,
//             password:data.password,
//             expiresInMins:1,
//         };
//
//         login(loginData);
//         reset();
//
//
//
//
//     }
//
//
//     const onButtonClickNavigate = ()  =>{
//
//         if (router){
//             router.push('/auth/login');
//         }
//     }
//
//     return (
//         <div>
//             <form action={'/auth/login'}  onSubmit={handleSubmit(customHandler)}>
//                 <label className={'block'}>
//                     <input className={'border-2 border-black'}   type="text" {...register('username')}  placeholder="username"/>
//
//
//                 </label>
//                 <label>
//                     <input  className={'border-2 border-black'} type="text" {...register('password')} placeholder="password"/>
//
//                 </label>
//                 <br/>
//                 <button className={'border-2 bg-green-300 '}  disabled={!isValid} onClick={onButtonClickNavigate}>Log in</button>
//             </form>
//
//         </div>
//
//     );
//
//
// };
//
//
// export default AuthorizationPage;
'use client'
import React, {useEffect, useState} from 'react';

import {login, LoginData} from "@/services/api.auth-service";
import {useForm} from "react-hook-form";
import userValidator from "@/app/validator/user-validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useRouter} from "next/compat/router";


const AuthorizationPage = () => {

    const {handleSubmit, register, formState:{ isValid},reset}  =
        useForm<LoginData>({mode:'all', resolver:joiResolver(userValidator)});

    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // або показати лоадер
    }


    const onButtonClickNavigate = ()  =>{
        if(router){
            router.push('/auth/login')
        }

    }

    const customHandler = (data:LoginData,
    ) => {


        console.log(data)
        const loginData:LoginData = {
            username:data.username,
            password:data.password,
            expiresInMins:1,
        };

        login(loginData);
        reset();
    }

    return (
        <div>
            <form action="/login" onSubmit={handleSubmit(customHandler)}>
                <label className={'block'}>
                    <input className={'border-2 border-black'}   type="text" {...register('username')}  placeholder="username"/>


                </label>
                <label>
                    <input  className={'border-2 border-black'} type="text" {...register('password')} placeholder="password"/>

                </label>
                <br/>
                <button className={'border-2 bg-green-300 '}  disabled={!isValid} onClick={onButtonClickNavigate}>Log in</button>
            </form>

        </div>
    );
};

export default AuthorizationPage;
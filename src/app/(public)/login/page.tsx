import React, {FC} from 'react';
import {Menu} from "@/components/authorization-menu/AuthorizationMenu";

type Props={
    searchParams:Promise<{[key:string]: string | string[] | undefined }>
}

const LoginPage:FC<Props> = async ({searchParams}) => {

    const awaiterSearchParam = await searchParams;
    console.log(awaiterSearchParam);

    return (
        <div>
            <Menu/>
        </div>
    );
};

export default LoginPage;
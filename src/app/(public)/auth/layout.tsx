import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title:'AuthorizationLayout metadata'
}
type Props = {children:React.ReactNode}
const AuthorizationLayout = ({children}:Props)=>{
    return(
        <>
            {children}
        </>
    );
};

export default AuthorizationLayout;
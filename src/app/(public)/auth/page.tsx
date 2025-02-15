import React from 'react';

const AuthorizationPage = () => {
    return (
        <div>
            <form action="/login">
                <label className={'block'}>
                    <input className={'border-2 border-black'}   type="text"   placeholder="username"/>


                </label>
                <label>
                    <input  className={'border-2 border-black'} type="text"  placeholder="password"/>

                </label>
                <br/>
                <button className={'border-2 bg-green-300 '}  >Log in</button>
            </form>

        </div>
    );
};

export default AuthorizationPage;
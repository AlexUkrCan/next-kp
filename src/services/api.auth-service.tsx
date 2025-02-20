
import axios from "axios";
import {IUsersWithTokens} from "@/models/auth-model/IUsersWithTokens";
import {ITokenPair} from "@/models/auth-model/ITokenPairs";
import {retriveLocalStorage} from "@/app/helper/helpers";
import Cookie from 'js-cookie';




const axiosInstance =  axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}
});



//будемо перехоплювати всі запити які будуть get
axiosInstance.interceptors.request.use((requestObject)=>{
    //беремо метод який використовує requestObject та переводимо його у великі літери так як зазвичай ці методи прописані великими літерами
    if(requestObject.method?.toUpperCase() === "GET"){
        //в розділ з хедерами додаєм хедер Authorization
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUsersWithTokens>('user').accessToken;
    }
    return requestObject
})


//створюємо метод login яка буде приймати обєкт LoginData та робимо для нього тип

export type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}
export const login =async ({username, password, expiresInMins}:LoginData):Promise<void> => {
    //робимо запит на відповідний endpoint
    const {data:userWithtoken} = await axiosInstance.post<IUsersWithTokens>("/login", {username, password, expiresInMins});
    //запит поверне нам відповідь в середмні якої вже будуть наші токени
    console.log(userWithtoken);
    //зберігаємо нащ токен в localstorage
    //  localStorage.setItem('user', JSON.stringify(userWithtoken));
    Cookie.set('token', userWithtoken.accessToken, { expires: 1, secure: process.env.NODE_ENV === 'production' });
    Cookie.set('refreshToken', userWithtoken.refreshToken, { expires: 1, secure: process.env.NODE_ENV === 'production' });

}
export const getProtectedData = async () => {
    const token = Cookie.get('token'); // Отримуємо токен з cookie
    if (!token) {
        console.log('Token not found!');
        return;
    }

    const response = await fetch('https://dummyjson.com/auth', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Додаємо токен у заголовок
        },
    });

    const data = await response.json();
    console.log(data);
};



// Викликаємо функцію після аутентифікації


// export const loadAuthProducts = async ():Promise<IProducts[]> => {
//     const {data:{products}} = await axiosInstance.get<IBaseResponceModel>("/products");
//     return products;
// }

//робимо функцію для рефрешу
export const refresh = async ():Promise<void> => {
    //дістаємо юзера з localstorage
    const user = retriveLocalStorage<IUsersWithTokens>('user');
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {refreshToken:user.refreshToken , expiresInMins:1});
    console.log(accessToken);
    console.log(refreshToken);
    //візьмемо користувача який в нас існує в локалсторедж та звернемось до його характеристик accessToken та refreshToken і впровадимо йому нові токени
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(user));
}
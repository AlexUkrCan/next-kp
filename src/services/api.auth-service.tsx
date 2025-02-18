
import axios from "axios";
import {IUsersWithTokens} from "@/models/auth-model/IUsersWithTokens";
import {ITokenPair} from "@/models/auth-model/ITokenPairs";
import {retriveLocalStorage} from "@/app/helper/helpers";



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
     localStorage.setItem('user', JSON.stringify(userWithtoken));

}

export const sendTokenToServer = async () => {
    // Отримуємо токен з localStorage
    const token = localStorage.getItem('user'); // Тут 'auth_token' - назва ключа, де зберігається токен

    if (token) {
        try {
            // Відправляємо токен на сервер для збереження в cookies
            await axios.post('http://localhost:3001/auth/save-token', { token });
        } catch (error) {
            console.error('Помилка при відправці токену на сервер:', error);
        }
    }
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
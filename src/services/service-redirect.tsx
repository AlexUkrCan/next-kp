

// // export async function getServerSideProps(context) {
// //     const { req, res } = context;
//
//
//
//     // Приклад перевірки аутентифікації
//     const isAuthenticated = false; // перевірте логіку тут, наприклад, через сесії або токени
//
//     if (!isAuthenticated) {
//         // Якщо користувач не авторизований, виконуємо редірект
//         return {
//             redirect: {
//                 destination: '/auth/login', // Шлях на який перенаправляємо
//                 permanent: false, // Тимчасовий редірект (302)
//             }
//         };
//     }
//
//     return {
//         props: {}, // Повертаємо дані на сторінку
//     };
// }


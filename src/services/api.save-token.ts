import cookie from 'cookie';
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: 'Токен не надано' });
        }

        // Зберігаємо токен у cookie
        res.setHeader('Set-Cookie', cookie.serialize('user', token, {
            httpOnly: true,  // Захищає cookie від доступу через JavaScript
            secure: process.env.NODE_ENV === 'production',  // Використовувати тільки через HTTPS в продакшн середовищі
            maxAge: 60 * 60 * 24 * 7,  // Термін дії cookie - 7 днів
            path: '/',  // Cookie доступна на всіх сторінках
        }));

        return res.status(200).json({ message: 'Токен успішно збережений в cookies' });
    }

    return res.status(405).json({ message: 'Метод не дозволений' });
}
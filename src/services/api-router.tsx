
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();


    const isValidLogin = username === 'correctUsername' && password === 'correctPassword';

    if (isValidLogin) {

        return NextResponse.redirect('/auth/login');
    } else {

        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
}
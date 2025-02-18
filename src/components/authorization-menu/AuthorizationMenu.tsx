import Link from "next/link";

export const Menu = () => {
    return (
        <ul>


            <li>
                <Link href="/auth/login/users">users</Link>
            </li>

            <li>
                <Link href="/auth/login/recipes">recipes</Link>
            </li>


        </ul>
    );
};
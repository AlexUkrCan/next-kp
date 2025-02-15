import Link from "next/link";

export const Menu = () => {
    return (
        <ul>


            <li>
                <Link href="/login/users">users</Link>
            </li>

            <li>
                <Link href="/login/recipes">recipes</Link>
            </li>


        </ul>
    );
};
import Link from "next/link";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link href="/">main</Link>
            </li>

            <li>
                <Link href="/auth">auth</Link>
            </li>

            <li>
                <Link href="/users">users</Link>
            </li>

            <li>
                <Link href="/recipes">recipes</Link>
            </li>
        </ul>
    );
};
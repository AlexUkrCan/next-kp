'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = ({ defaultQuery }: { defaultQuery: string }) => {
    const [query, setQuery] = useState(defaultQuery);
    const router = useRouter();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/users?q=${query}`);  // Перехід на нову URL-сторінку з параметром пошуку
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Пошук користувачів"
            />
            <button type="submit">Пошук</button>
        </form>
    );
};

export default SearchForm;
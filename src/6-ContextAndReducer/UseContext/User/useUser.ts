import { useEffect, useState } from 'react';
import { User } from './User';

export function useUser(userId: number) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        // раніше тут була бібліотечка axios, але тепер краще використовувати fetch
        // він підтримується всіма браузерами, і не потрібно встановлювати додаткові бібліотеки
        // axios краще брати тільки якщо вам треба просунуті можливості на кшталт interceptors
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [userId]);

    return user;
}

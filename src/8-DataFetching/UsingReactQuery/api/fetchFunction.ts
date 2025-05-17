export async function fetchFunction(path: string, options?: RequestInit) {
    // раніше тут була бібліотечка axios, але тепер краще використовувати fetch
    // він підтримується всіма браузерами, і не потрібно встановлювати додаткові бібліотеки
    // axios краще брати тільки якщо вам треба просунуті можливості на кшталт interceptors
    const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`, options);
    return response.json();
}

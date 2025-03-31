import classes from './About.module.css';

export function About() {
    return (
        <div className={classes.root}>
            <h2>Чому ви навчитеся</h2>
            <ol>
                <li>
                    створювати веб-додатки з використанням React, TypeScript та інших сучасних
                    технологій
                </li>
                <li>
                    створювати додатки з правильною архітектурою, які легко змінювати та
                    підтримувати
                </li>
                <li>думати "у стилі React" та зрозумієте, як React працює під капотом</li>
                <li>
                    управляти станом за допомогою "рідних" хуків Реакту а також бібліотек типу
                    Redux, Zustand, Jotai, Rematch
                </li>
                <li>отримувати дані з сервера за допомогою React Query, SWR або прямих запитів</li>
                <li>створювати маршрутизацію за допомогою React Router</li>
                <li>тестувати свої компоненти за допомогою Vitest та React Testing Library</li>
            </ol>

            <h2>Стек технологій</h2>
            <ul>
                <li>
                    <h3>Основи</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vite</li>
                    </ul>
                </li>
                <li>
                    <h3>Управління станом (State management)</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Rematch</li>
                        <li>Zustand</li>
                        <li>Jotai</li>
                    </ul>
                </li>
                <li>
                    <h3>Отримання даних (Data fetching)</h3>
                    <ul>
                        <li>React.Context + fetch API</li>
                        <li>TanStack Query / React Query</li>
                        <li>SWR</li>
                    </ul>
                </li>
                <li>
                    <h3>Маршрутизація (Routing)</h3>
                    <ul>
                        <li>React Router</li>
                    </ul>
                </li>
                <li>
                    <h3>Тестування (Testing)</h3>
                    <ul>
                        <li>Vitest / Jest</li>
                        <li>React Testing Library</li>
                        <li>Storybook</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

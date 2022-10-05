# Опановуємо React

Репозиторій з усіма прикладами Udemy курсу **"Опановуємо React"**.

У цьому курсі розглядаються всі тонкощі розробки web застосунків за домогою бібліотеки React.
Від "hello world" до комплексних великих застосунків.
Десятки цікавих прикладів, кожен з яких висвітлює певну тему.

Live Demo ось [тут](https://a-polishchuk.github.io/mastering-react/), а сам курс можна знайти [тут]().

## Стек технологій

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- State management
  - [Redux](https://redux.js.org/)
  - [Rematch](https://rematchjs.org/)
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Recoil](https://recoiljs.org/)
- Data fetching
  - [React Query](https://tanstack.com/query/v4)
  - [SWR](https://swr.vercel.app/)
- Unit tests
  - [Vitest](https://vitest.dev/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/)

## Що треба встановити до початку роботи

- [Git](https://git-scm.com/) - система контролю версій
- [VS Code](https://code.visualstudio.com/) - IDE / інтегроване середовище розробки / редактор коду (не обов'язково використовувати саме цей редактор, та всі приклади налаштувань будут показані на VS Code)
- [Node.js](https://nodejs.org/en/) - javascript runtime для виконання js скриптів поза браузером

## Як запустити проект локально

Ви можете використовувати один з трьох менеджерів пакетів:

- [npm](https://www.npmjs.com/) - дефолтний менеджер, встановлюється разом з нодою
- [yarn](https://yarnpkg.com/) - у всіх відео курсу буде використовуватись саме yarn
- [pnpm](https://pnpm.io/) - наймолодший і найперспективніший

| Крок                    | npm             | yarn         | pnpm         |
| ----------------------- | --------------- | ------------ | ------------ |
| Встановлюємо бібліотеки | npm install     | yarn         | pnpm install |
| Запускаємо дев сервер   | npm run dev     | yarn dev     | pnpm dev     |
| Production збірка       | npm run build   | yarn build   | pnpm build   |
| Preview prod версії     | npm run preview | yarn preview | pnpm preview |

Команди для всіх трьох менеджерів дуже схожі.

Головне - виберіть якийсь один, і використовуйте тільки його.

NPM створює свій package-json.lock файл, yarn - свій yarn.lock. І якщо встановлювати депенденсі по черзі то одним менеджером то іншим, можна очікувати непередбачуваних злих багів.

## Корисні посилання для подальшого вивчення React

- [Документація React](https://reactjs.org/docs/hello-world.html)
- [usehooks](https://usehooks.com/) - колекція "рецептів" користувацьких хуків
- [react-use](https://github.com/streamich/react-use) - бібліотека хуків загального призначення, стане в нагоді майже у кожному проекті
- [Блог React](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)
- [Блог Kent C. Dodds](https://kentcdodds.com/blog/)
- [Блог Robin Wieruch](https://www.robinwieruch.de/blog)

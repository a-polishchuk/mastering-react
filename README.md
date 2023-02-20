## 🎓 Репозиторій Udemy курсу [Опановуємо React](https://www.udemy.com/course/opanovuemo-react/?referralCode=C0563B0126CAF7329C80)

У цьому курсі розглядаються всі тонкощі розробки web застосунків за домогою бібліотеки React.

Від "Hello, world!" до комплексних великих застосунків.

Десятки цікавих прикладів, кожен з яких висвітлює певну тему.

▶️ [Live Demo](https://a-polishchuk.github.io/mastering-react/)

## 🛠 Стек технологій

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

## 💻 Що треба встановити до початку роботи

- [Git](https://git-scm.com/) - система контролю версій
- [VS Code](https://code.visualstudio.com/) - IDE / інтегроване середовище розробки / редактор коду (не обов'язково використовувати саме цей редактор, та всі приклади налаштувань будут показані на VS Code)
- [Node.js](https://nodejs.org/en/) - javascript runtime для виконання js скриптів поза браузером

## ▶️ Як запустити проект локально

Раджу використовувати один з цих менеджерів пакетів:

- [npm](https://www.npmjs.com/) - дефолтний менеджер, встановлюється разом з нодою.
- [yarn](https://classic.yarnpkg.com/) - у всіх відео курсу буде використовуватись саме yarn. ❗️ **ЗВЕРНІТЬ УВАГУ:** Я буду використовувати саме версію 1, і вам рекомендую зробити так само. Версії 2 і 3 мають зовсім іншу архітектуру, і у вас можуть виникнути труднощі з інсталюванням певних бібліотек.

Існують й інші менеджери пакетів (наприклад [pnpm](https://pnpm.io/)), проте не рекомендую використовувати їх початківцям.

| Крок                    | npm             | yarn         |
| ----------------------- | --------------- | ------------ |
| Встановлюємо бібліотеки | npm install     | yarn         |
| Запускаємо дев сервер   | npm run dev     | yarn dev     |
| Production збірка       | npm run build   | yarn build   |
| Preview prod версії     | npm run preview | yarn preview |

❗️ Головне - виберіть один менеджер, і використовуйте тільки його.

❗️ NPM створює свій _package-json.lock_ файл, yarn - свій _yarn.lock_. Якщо встановлювати депенденсі по черзі то одним менеджером то іншим, можна спіймати дуже неочевидний баг.

## 🆘 Фіксимо помилки

1️⃣ Якщо ви намагаєтесь запустити проект локально і отримуєте незрозумілий еррор, найперше і найліпше що можна зробити - видалити node_modules в директорії проекту та встановити залежності ще раз. Для цього треба виконати наступну команду (❗️перед цим треба впевнитись, що ви знаходитесь в root директорії проекту, це важливо❗️)

> rm -rf node_modules && yarn

2️⃣ Якщо ви намагаєтесь запустити storybook за допомогою команди **yarn storybook** і отримуєте ось цей еррор

> Error: error:0308010C:digital envelope routines::unsupported

то скоріше за все, ви використовуєте Node.js версії 17+. Щоб позбавитись цієї помилки, треба додати env variable

> NODE_OPTIONS=--openssl-legacy-provider

Я додав спеціальний скрипт до package.json, що робить це за Вас. Замість

> yarn storybook

треба запускати

> yarn storybook:node18

## ✅ Ваша контрибуція

🐛 Якщо ви помітили помарку/помилку/багу/щешось - не вагайтесь, [створюйте нове ішью](https://github.com/a-polishchuk/mastering-react/issues/new).

🙌 Якщо ви дуже молодець і власноруч щось пофіксили (або просто хочете доповнити курс якимось прикладом) - то можете створити [Pull Request](https://github.com/a-polishchuk/mastering-react/pulls).

## 📚 Корисні посилання для подальшого вивчення React

- [Документація React](https://reactjs.org/docs/hello-world.html)
- [usehooks](https://usehooks.com/) - колекція "рецептів" користувацьких хуків
- [react-use](https://github.com/streamich/react-use) - бібліотека хуків загального призначення, стане в нагоді майже у кожному проекті
- 👤 Блоги
  - [Kent C. Dodds](https://kentcdodds.com/blog/)
  - [Robin Wieruch](https://www.robinwieruch.de/blog)
  - [Josh W Comeau](https://www.joshwcomeau.com/)
  - [TkDodo](https://tkdodo.eu/blog/)

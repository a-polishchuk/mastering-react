## 🎓 Репозиторій Udemy курсу [Опановуємо React](https://www.udemy.com/course/opanovuemo-react/?referralCode=C0563B0126CAF7329C80)

У цьому курсі розглядаються всі тонкощі розробки web застосунків за домогою бібліотеки React.

Від "Hello, world!" до комплексних великих застосунків.

Десятки цікавих прикладів, кожен з яких висвітлює певну тему.

▶️ [Live Demo](https://a-polishchuk.github.io/mastering-react/)

## 🛠 Стек технологій

- Основа
  - [Typescript](https://www.typescriptlang.org/)
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
- Менеджмент локального стану (Local state management)
  - useContext + useState/useRef/useReducer
  - [Redux](https://redux.js.org/)
  - [Rematch](https://rematchjs.org/)
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Jotai](https://jotai.org)
- Дані з бекенду (Data fetching)
  - useEffect + fetch API
  - [React Query](https://tanstack.com/query/v4)
  - [SWR](https://swr.vercel.app/)
- Тестування, юніт тести (Unit tests)
  - [Vitest](https://vitest.dev/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Бібліотека компонентів
  - [Storybook](https://storybook.js.org/)

## 💻 Що треба встановити до початку роботи

- [Git](https://git-scm.com/) - система контролю версій
- [VS Code](https://code.visualstudio.com/) - IDE / інтегроване середовище розробки / редактор коду (не обов'язково використовувати саме цей редактор, та всі приклади налаштувань будут показані на VS Code)
- [Node.js](https://nodejs.org/en/) - javascript runtime для виконання js скриптів поза браузером

## 🟢 Node.js
Нам необхідно буде запускати деякі скрипти на локальній машині поза браузером.
Для того щоб це зробити необхідно середовище виконання javascript - node.js.
Я стараюсь періодично оновлювати версії node.js і бібліотек і наразі раджу запускати проект на версії 18 (обирайте саму свіжу 18ту збірку).
Для того щоб швидко встановити node.js на ваш комп'ютер, рекомендую використовувати [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm).
Не плутайте з NPM (Node Package Manager), це два різні поняття.
NVM дозволяє "менеджити" різні версії node.js на одній машині.
В корні проекту є файл `.nvmrc`, який вказує на версію node.js, яку треба встановити.
Встановивши NVM ви можете запустити команду `nvm install` і вона встановить відповідну версію node.js.

## ▶️ Менеджер пакетів

Для того щоб запустити проект локально або зібрати його фінальну (production) версію, потрібно встановити залежності (бібліотеки).
Як це працює: у файлі package.json описані всі бібліотеки, які необхідні для роботи проекту, код цих бібліотек ми будемо використовувати.
Є спеціальна програма - менеджер пакетів (package manager), яка відповідає за встановлення/оновлення цих бібліотек.
Коли ми запускаємо команду "встановити залежності", менеджер пакетів зчитує файл package.json і скачує/встановлює всі бібліотеки, які вказані в цьому файлі.
Менеджер пакетів може бути різним, наприклад npm, yarn, pnpm, bun, і т.д.
Дефолтний менеджер пакетів - NPM (node package manager), він йде у комплекті з Node.js. Окремо його встановлювати не потрібно.
**В курсі я користуюсь менеджером yarn (version 1), проте вам я рекомендую використовувати саме NPM.**
Раніше yarn був значно швидшим і кращим, але зараз такої різниці немає.
Якщо розбираєтесь у пакетних менеджерах - ви можете використовувати будь-який з них, різниці не буде.
Я буду використовувати дуже прості команди менеджеру, і вони досить схожі між yarn і npm.

| Крок                    | npm             | yarn         |
| ----------------------- | --------------- | ------------ |
| Встановлюємо бібліотеки | npm install     | yarn         |
| Запускаємо дев сервер   | npm run dev     | yarn dev     |
| Production збірка       | npm run build   | yarn build   |

❗️ Головне - виберіть один менеджер, і використовуйте тільки його.

❗️ NPM створює свій _package-json.lock_ файл, yarn - свій _yarn.lock_. Якщо встановлювати депенденсі по черзі то одним менеджером то іншим, можна спіймати дуже неочевидний баг.

## 🆘 Фіксимо помилки

Якщо ви намагаєтесь запустити проект локально і отримуєте незрозумілий еррор, найперше і найліпше що можна зробити - видалити node_modules в директорії проекту та встановити залежності ще раз. Для цього треба виконати наступну команду (❗️перед цим треба впевнитись, що ви знаходитесь в root директорії проекту, це важливо❗️)

> rm -rf node_modules && npm install

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

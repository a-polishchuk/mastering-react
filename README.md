[🇺🇦 Українською](README_ua)

## 🎓 Udemy course repository - [Mastering React](https://www.udemy.com/course/opanovuemo-react/?referralCode=C0563B0126CAF7329C80)

This course covers all the nuances of web application development using the React library.

From "Hello, world!" to complex large-scale applications.

Dozens of interesting examples, each highlighting a specific topic.

▶️ [Live Demo](https://a-polishchuk.github.io/mastering-react/)

## 🛠 Tech stack

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

## 💻 Prerequisites

- [Git](https://git-scm.com/) - Version control system
- [VS Code](https://code.visualstudio.com/) - IDE / Integrated Development Environment / Code Editor (not mandatory, but all configuration examples will be shown using VS Code)
- [Node.js](https://nodejs.org/en/) - JavaScript runtime for executing JS scripts outside the browser

## ▶️ How to run the project locally

It's recommended to use one of these package managers:

- [npm](https://www.npmjs.com/) - default manager installed with Node.js.
- [yarn](https://classic.yarnpkg.com/) - Yarn will be used in all course videos. ❗️ **NOTE:** I will be using version 1, and I recommend you do the same. Versions 2 and 3 have a completely different architecture, which may cause issues with installing certain libraries.

There are other package managers (e.g. [pnpm](https://pnpm.io/)), but they are not recommended for beginners.

| Step                    | npm             | yarn         |
| ----------------------- | --------------- | ------------ |
| Install dependencies    | npm install     | yarn         |
| Start dev serevr        | npm run dev     | yarn dev     |
| Production build        | npm run build   | yarn build   |
| Prod version preview    | npm run preview | yarn preview |

❗️ The key is to choose one package manager and stick to it.

❗️ NPM creates its own package-json.lock file, yarn creates yarn.lock. Installing dependencies alternately with one manager and then the other can lead to very obscure bugs.

## 🆘 Troubleshooting

1️⃣ If you're trying to run the project locally and encounter an unclear error, the best first step is to delete the node_modules directory in the project and reinstall dependencies. To do this, run the following command (❗️ensure you're in the root directory of the project, this is important❗️)

> rm -rf node_modules && yarn

2️⃣ If you're trying to run Storybook with the **yarn storybook** command and encounter the following error

> Error: error:0308010C:digital envelope routines::unsupported

it's likely you're using Node.js version 17+. To resolve this error, add the following environment variable:

> NODE_OPTIONS=--openssl-legacy-provider

I've added a special script to package.json that does this for you. Instead of

> yarn storybook

run

> yarn storybook:node18

## ✅ Contributions

🐛 If you notice a typo/mistake/bug/anything else, don't hesitate to [create new issue](https://github.com/a-polishchuk/mastering-react/issues/new).

🙌 If you are awesome and have fixed something yourself (or just want to contribute an example), you can create a [Pull Request](https://github.com/a-polishchuk/mastering-react/pulls).

## 📚 Useful links for further React learning

- [Official React Docs](https://reactjs.org/docs/hello-world.html)
- [usehooks](https://usehooks.com/) - A collection of custom hook "recipes"
- [react-use](https://github.com/streamich/react-use) - A library of general-purpose hooks, useful in almost every project
- 👤 Blogs
  - [Kent C. Dodds](https://kentcdodds.com/blog/)
  - [Robin Wieruch](https://www.robinwieruch.de/blog)
  - [Josh W Comeau](https://www.joshwcomeau.com/)
  - [TkDodo](https://tkdodo.eu/blog/)

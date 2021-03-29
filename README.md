# tsexpress

A TypeScript starter for Express that includes all you need to build amazing projects. 🔥

- 🗂 **DDD** - Domain Driven Design pattern
- ⚖ **SOLID** - Principles of software design
- 🔑 **JWT** - JSON Web Token authentication
- 📏 **ESLint** - Pluggable JavaScript linter
- 💖 **Prettier** - Opinionated code formatter
- 🎭 **Jest** - Tool for functionality testing
- 💾 **TypeORM** - Configure your database using TypeScript and Javascript
- 📂 **Absolute import** - Import folders and files using the `@` prefix

## 🚀 Getting started

Clone this repository;<br />
Configure your database on './ormconfig.json';<br />
And run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `npm run dev:server` or `yarn dev:server`;

To view the project open `http://localhost:3333`.

## 🧱 Building your migrations

Work with your migrations using the following commands:

1. `npm run typeorm migration:create -n MIGRATIONNAME` or `yarn typeorm migration:create -n MIGRATIONNAME`;
2. `npm run typeorm migration:run` or `yarn typeorm migration:run`;
3. `npm run typeorm migration:revert` or `yarn typeorm migration:revert`;

Your migrations will be created on './src/shared/infra/typeorm/migrations'.

## 🎭 Testing your codes

Create your tests using the '.spec.ts' extension;<br />
And run the following command to run the tests and create a covarage report:

1. `npm run test` or `yarn test`;

You can see the coverage report opening the './coverage/lcov-report/index.html' on your navegator.

---

Made with ♥ by Vilson Castilho

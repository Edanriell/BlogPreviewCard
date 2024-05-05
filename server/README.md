# SocialLinksProfile Server

To run server in development mode you must:

- Configure .env file (Check out .env examples);
- Start server, use command start:dev;

To run server in production mode you must:

- Configure .env file (Check out .env examples);
- Do DB migrations,use command start:migration <strong>Server uses Postgres DB</strong>;
- Build server, use command start:build;
- <strong>After server is built, you must copy data folder to dist !</strong>;
- Open dist folder and open there a terminal and type <strong>$env:NODE_ENV="production"; $env:PORT=3020; $env:
  postgresql://DB_USERNAME:DB_PASSWORD@localhost:DB_PORT/DB_DATABASE_NAME?schema=public:
  27017/SocialLinksProfile?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2"; node
  main.js</strong>;

Server is tested and fully working in Node v.20.11.1.
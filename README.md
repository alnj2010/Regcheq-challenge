# API Regcheq Challenge

## Deploy local from docker (All services in one)

### Requirements

---

- Git
- Docker 20.10.8 (It will install all these tools for you)
- docker-compose 1.29

### Installation

---

Download zip file and extract it [latest pre-built api release](https://github.com/alnj2010/backend-walmart-challenge). Or clone the repository and cd into it.

You must copy the docker env file (`.env.Docker`) and rename it to `.env`

```sh
$ cp .env.Docker ./.env

```

Download zip the webapp files from [latest pre-built webapp release](https://github.com/alnj2010/website-walmart-challenge) and copy into api release directory. Or clone the repository into api release directory. Rename webapp release directory to `webapp` (IMPORTANT)

```sh
$ git clone https://github.com/alnj2010/website-walmart-challenge.git:webapp

```

You should have this directory structure

├── docker-compose.yml

├── Dockerfile

├── .env

├── .env.Example

├── .env.Docker

├── jest.config.js

├── LICENSE

├── package.json

├── products-db

├── README.md

├── requests.http

├── src

├── test

└── `webapp`

copy the .env.Docker file into `webapp` directory and rename it to `.env`

```sh
$ cp ./webapp/.env.Docker ./webapp/.env

```

Now we are ready to run the docker-compose command!

Make sure you are in the root of the api release directory and run:

```sh
$ docker-compose up

```

When the command is ready and the containers running, you can see three instances:

| Service   | LOCALHOST:PORT  |
| --------- | --------------- |
| `MONGODB` | localhost:27017 |
| `API`     | localhost:8000  |
| `WEBAPP`  | localhost:3000  |

The final step is running the database makefile:

```sh
$ make database-provision -C ./products-db/

```

The latter will fill the databse with documents to test.

Open http://localhost:3000 to view it in your browser.

## Deploy local (developer mode)

### Requirements

---

- Node v16.13.1 (npm v8.1.2)
- Docker 20.10.8 (It will install all these tools for you)

### Installation

Download zip file and extract it [latest pre-built api release](https://github.com/alnj2010/backend-walmart-challenge). Or clone the repository and cd into it.

You must copy the example env file (`.env.Example`) and rename it to `.env`

```sh
$ cp .env.Example ./.env

```

Run MongoDB with the command:

```sh
$ make database-up -C ./products-db/

```

Install nodemon globally

```sh
$ npm install nodemon -g

```

Install project dependencies

```sh
$ npm install

```

Run nodemon to run the api service

```sh
$  nodemon ./src/index.js

```

### In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000)

#### `npm test`

Launches the test runner

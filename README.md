# API Regcheq Challenge

## Deploy local from docker (All services in one)

### Requirements

---

- Git
- Docker 20.10.8 (It will install all these tools for you)
- docker-compose 1.29

### Installation

---

Download zip file and extract it [latest pre-built api release](https://github.com/alnj2010/Regcheq-challenge). Or clone the repository and cd into it.

You must copy the docker env file (`.env.DOCKER`) and rename it to `.env`

```sh
$ cp .env.DOCKER ./.env

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

The final step is running the database makefile:

```sh
$ make database-provision -C ./regcheq-db/

```

The latter will fill the databse with documents to test.

Open http://localhost:8000 to view it in your browser.

## Deploy local (developer mode)

### Requirements

---

- Node v12.22.9 (npm v6.14.15)
- Docker 20.10.8 (It will install all these tools for you)

### Installation

Download zip file and extract it [latest pre-built api release](https://github.com/alnj2010/Regcheq-challenge). Or clone the repository and cd into it.

You must copy the example env file (`.env.EXAMPLE`) and rename it to `.env`

```sh
$ cp .env.EXAMPLE ./.env

```

Run MongoDB with the command:

```sh
$ make database-up -C ./regcheq-db/

```

Install project dependencies

```sh
$ npm install

```

### In the project directory, you can run:

#### `npm dev:regcheq:backend`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000)

#### `npm run test`

Launches the test runner

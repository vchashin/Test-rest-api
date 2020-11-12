## Installation

```bash
$ npm install
```

## Running the app

```bash
# setup db
$ docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test 

Open http://localhost:3000/api/#/

Open, login and get access token https://dev-lnwkc070.eu.auth0.com/authorize?audience=http://localhost:3000&scope=SCOPE&response_type=code&client_id=1Cnfh5qfsETLC5pIjTSDDA1V8Joiq61p&redirect_uri=http://localhost:3000/api/auth/login&state=STATE?prompt=none

Use access token to create users using CRUD R API.

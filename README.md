# Air Poll
## Get air quality information from around the world.

[![Powered by](https://openaq.org/assets/graphics/layout/oaq-logo-col-pos.svg)](https://docs.openaq.org)

## Technology stack
This application has both backend service and frontend web application.
##### Backend
- NodeJs
- Typescript
- MongoDb

##### Frontend
- Angular 12
- Typescript
- Angular Material

## Features
- Latest data import/synchronization from OpenAq API
- Filtering by country and city
- Sorting
- Infinite scroll with lazy loading

## Installation

This project requires [Node.js](https://nodejs.org/) v14+ to run.

##### Backend service
Install the dependencies and start the server.

```sh
cd backend
npm i
npm run start
```
Backend service listens at Port 4000 by default.

##### Frontend web application
Install the dependencies and start the server.

```sh
cd frontend
npm i
npm run start
```
Frontend application listens at Port 4200 by default.

## License

MIT

**Free Software, Hell Yeah!**

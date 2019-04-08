
## Description

nested filter bug in @nestjsx/crud.

to reproduce run the server, then
1. ```bash curl -X POST "http://localhost:3000/color" -H "Content-Type: application/json" -d '{"name":"white"}'```
2. ```bash curl -X POST "http://localhost:3000/color" -H "Content-Type: application/json" -d '{"name":"black"}'```
3. ```bash curl -X POST "http://localhost:3000/car" -H "Content-Type: application/json" -d '{"name":"testCar","color":{"id":1}}'```
4. ```bash curl -X POST "http://localhost:3000/car" -H "Content-Type: application/json" -d '{"name":"testCar2","color":{"id":2}'```
5. ```bash curl -X GET "http://localhost:3000/car?join=color&filter=color.id||eq||1" -H "Content-Type: application/json" -d '{"name":"testCar","color":{"id":1}}'```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

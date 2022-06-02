# todo-api
Simple todo API to try out REST-APIs with node.js and express.js

Nothing fancy yet. Definitely not ready for production! ;-)

## Endpoints
```
GET    /api/v1/todos              # get all todos
GET    /api/v1/todos/:todoId      # get one todo
POST   /api/v1/todos              # create new todo
PATCH  /api/v1/todos/:todoId      # update todo
DELETE /api/v1/todos/:todoId      # delete todo
```

Future improvements
* prevent overwrite of other fields in DB, e.g. createdAt
* improve authentification/authorization (API key, OpenID)
* add support for different databases (lowdb, S3, Postgres)
* improve input validation
* add tests
* add API doc
* create client app

const express = require("express")
const basicAuth = require('express-basic-auth')
const bodyParser = require("body-parser")
const v1TodoRouter = require("./v1/routes/todoRoutes")

const app = express()
const PORT = process.env.PORT || 3000

// this is just a very first PoC and is obviously very insecure:
// - credentials in repo
// - no HTTPS
app.use(basicAuth({
  users: { 'user': 'supersecret' }
}))

app.use(bodyParser.json())
app.use("/api/v1/todos", v1TodoRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
})
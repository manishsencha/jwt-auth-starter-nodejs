const express = require('express')
const signin = require('./route/auth/signin')
const signup = require("./route/auth/signup")
const auth = require('./middleware/auth')
const protected = require('./route/protectedroutes/protected')
const app = express()

require('dotenv').config()

// Connect to database
require('./config/database').connect()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.post("/signup", signup)
app.post("/signin", signin)
app.get("/protected", auth, protected);
app.listen(PORT, () => console.log(`Server started : http://localhost:${PORT}`))

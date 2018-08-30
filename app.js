const express = require('express')
const app = express();
// const db = require('./db')


const bodyParser = require('body-parser')
// define public resources in express
// define data that will be parsed by body-parser
app.use(express.static('public'))
app.use(bodyParser.json())
// data will be passed through url
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
	Defined routes
**/
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

// make a post to add form data
app.post('/', urlencodedParser, (req, res) => {
    res.send(req.body)
})
// database connection
// db.connect()

app.listen(3000, () => console.log('currently listening on port 3000'))

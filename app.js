// Import required dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const useragent = require('express-useragent')

// create an instance of express and instantiate other dependencies
const app = module.exports = express();
app.use(bodyParser.json())
app.use(cors())
app.use(useragent.express())


app.get('/api/whoami', function (req, res, next) {
    const language = req.acceptsLanguages ;
    const software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
    // const software = req.get('User-Agent');
    // req.headers['user-agent']
    const ipaddress = req.ip

    res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
})

app.listen(process.env.PORT || 3000, () => console.log("Listening to Port process.env.PORT || 3000"));
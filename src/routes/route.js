const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const welcome = require("../logger/logger")
const batchInfo = require("../util/helper")
const hardCode = require("../validator/formate")
const lodash = require("lodash")
let action =  [["horror","The Shining"], ["drama", "Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
let pairs = lodash.fromPairs(action)

let years = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let odd = [1,3,5,7,9]

let union = _.union([1,2],[2,3,5],[6,4])

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)

    welcome.welcome("welcome")
    batchInfo.batchInfo("batch")
    hardCode.hardCode("case")
    console.log("4.",_.chunk(years,4))
    console.log("4.",_.tail(odd))
    console.log("4.",_.sortBy(union))
    console.log("4.",pairs)
    res.send('any dummy text')
    
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;
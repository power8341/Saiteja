const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})
//Full array response
router.get("/movies",function(req,res){
    console.log(["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"])
    res.send("Movies list has been sent")
})

//
router.get("/movies/:indexNumber",function(req,res){
    let arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let value = parseInt(req.params.indexNumber)-1 //4
    
    if(value>=arr.length || value<1){
        res.send("No movie found, use a valid list Number")
        console.log(value>=arr.length?"req is greater":"req is lower")
    }else{
        console.log(arr[value])
        res.send(`${value+1} movie in the list is ` + arr[value])
    }
})

router.get("/film/:filmId",function(req,res){
    let arr = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       console.log("Requested list is",req.params)
       let ID = req.params.filmId
       let found = "Give a valid ID as per the list"
       let print =`Unvalid request : ${ID}`
    for(let i =0;i<arr.length;i++){
        let obj = arr[i]
        let {id,name} = obj
        if(ID == id){
            found = `movie: ${name}`
            print = arr[i]
            // res.send(found)
            break;
        }
    }
    console.log(print)
    res.send(found)
       
})

//----------------MissingNo----------
router.get("/sol",function(req,res){
    let arr = [33,34,36,37]
    let missingNo = "No missing number found"
    let first = arr[0] 
    for(i=0;i<arr.length;i++){
        if(arr[i] !== first){
            missingNo = "Missing number: "+first;
            break;
        }else{
            first++
        }
    }
    console.log(missingNo)
    res.send(missingNo)
})

let arr= [1,2,3,5,6,7]
router.get("/sol1", function(req,res){
let total = 0;
for (var i in arr) {
    total += arr[i];
}

let lastDigit= arr.pop()
let consecutiveSum= lastDigit * (lastDigit+1) / 2
let missingNumber= consecutiveSum - total
console.log(missingNumber)
res.send("missing number: "+ missingNumber);
});


router.get("/sol2",function(req,res){
    let arr= [33, 34, 35, 37, 38]
let len= arr.length
let total = 0;
for (var i in arr) {
    total += arr[i];
}

let firstDigit= arr[0]
let lastDigit= arr.pop()
let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
let missingNumber= consecutiveSum - total

res.send("Missing number is: "+ missingNumber);
});



module.exports = router;
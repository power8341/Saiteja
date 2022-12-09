function problem2(){
    let date = new Date()
    let month  = date.getMonth() + 1
    let batch = "Californium, W3D4, the topic for today is Nodejs module system"
    console.log("2.",date)
    console.log("2.",month)
    console.log("2.",batch)
}
module.exports.batchInfo = problem2
const express = require("express");
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

// __direname - get current file location (if want to check so make new file and write in console.log)
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function (req, res) {
    
    // Number - conver expicity into number from text
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let meter = height * height;

    let BMI = weight / meter;

    res.send("Your BMI is " + BMI);
})

app.listen(port, () => {
    console.log(`Server start at port ${port}`);
})
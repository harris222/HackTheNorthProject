const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) =>{
    res.render("login");
});

router.get("/", (req, res) => {
    res.redirect("login");
});

// router.post("/login", passport.authenticate("local", {
//     successRedirect: "/menu",
//     failureRedirect: "/login"
// }), (req, res) => {
//     //
// });

function pullData(){

var SurveyMonkeyAPI = require('surveymonkey').SurveyMonkeyAPI;

var accessToken = 'EOHBd59CnkOdieYFC8v0UJiK8U7NTkGmNT8y2ImeSnTxsm4Wyq--mTlr7..TFXU1Hr3k-dpPfLAbzKb3qZg.KZc-gudT0ovEVdpPdYJR.TUK7jlGY4QS1n0k73wQBCLT';

try { 
    var api = new SurveyMonkeyAPI(accessToken, { version : 'v3', secure : false });
} catch (error) {
    console.log(error.message);
}


// or with a survey id
api.getResponses({id:'188715488'},function (error, data) {
    if (error)
        console.log(error);
    else
        var entireText = JSON.stringify(data); // Do something with your data!
        var fs = require('fs');
    fs.writeFile("test.json", entireText, function(err) {
    if (err) {
        console.log(err);
    }
});
});
    
}

module.exports = router;

var express = require("express");
var router = express.Router();
var User = require("../models/user");

router
    .route("/user")
    .get((req,res) => {
        User.find((err, users) => {
            if(err) throw err;
            res.json(users);
        })
    })
    .post((req,res) => {
        // const name = req.body.name;
        const { name } = req.body;
        var user = new User();
        user.name = name;

        user.save((err) => {
            if(err) throw err;
            res.json({message: "User successfully added! :-)"});
        });

    });

module.exports = router;
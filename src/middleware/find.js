
var express = require('express');
var accounts = require('../models/accounts');
var mysql = require('mysql');

var router = express.Router();


router.route('/checkmem')

// 查筆資源
.post(function (req, res)
{

    var sql = "SELECT * FROM `members`.`members` WHERE(`Id_num` = '" + req.body.checkmem + "');"
    console.log(sql)

    con.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result)
        }
    })

});
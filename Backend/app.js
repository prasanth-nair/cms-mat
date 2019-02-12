const express = require('express');
const cors = require('cors');
const moment = require('moment');


const app = express();

const posts = [
    {
        "eid": "53243534",
        "firstName": "Akhil",
        "lastName": "N",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    },
    {
        "eid": "7899688",
        "firstName": "Samson",
        "lastName": "P",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    },
    {
        "eid": "525235",
        "firstName": "afsdfa",
        "lastName": "X",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    }, {
        "eid": "3452345",
        "firstName": "lfgjfgjfg",
        "lastName": "X",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    }, {
        "eid": "4534543",
        "firstName": "3gdfsgg",
        "lastName": "X",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    }, {
        "eid": "567576567",
        "firstName": "cvbxcbv",
        "lastName": "X",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    }, {
        "eid": "2434234",
        "firstName": "hfdfsg",
        "lastName": "X",
        "company": "Capgemini",
        "manager": "Prasanth",
        "termDate": "2019-12-31"
    },]

// app.use('',
//     (req, res, next) => {
//         res.send('retun from backend for default path')
//         next();
//     }
// )
app.use(cors());

app.get('/api/employees/eid/:eid', (req, res, next) => {
    console.log(moment().format('LTS'), ' emp by id', req.params)
    res.status(200).json(
        {
            message: "This is a message from emp by id",
            emp: posts.filter(function (eidFilter) {
                return (eidFilter.eid == req.params.eid)
            }),
        })
})
app.get('/api/employees', (req, res, next) => {
    console.log(moment().format('LTS'), 'this is the /api/posts path')
    res.status(200).json(
        {
            message: "This is a message from backend",
            emp: posts
        })
});



module.exports = app;
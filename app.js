console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Jacob', 1, 'Jacob', 'Frank', 1, 2, 3, 4, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Jacob'));

// console.log('Result:', notes.add(-6, 12));

// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
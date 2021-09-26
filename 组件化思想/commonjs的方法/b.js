var {flag, sum} = require('./a.js')
//等同于下面两步
var x = require('./a.js')
var flag = x.flag;
var sum = x.sum;
sum(22, 22)
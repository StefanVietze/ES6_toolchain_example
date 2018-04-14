'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Hello from JavaScript!"); // index.js

console.log((0, _moment2.default)().format('MMMM Do YYYY, h:mm:ss a'));

var name = "Bob",
    time = "today";

console.log('Hello ' + name + ', how are you ' + time + '?');

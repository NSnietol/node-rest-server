
var EventEmitter = require("events").EventEmitter;

var util = require('util');

var Reloj = function(){

    var self= this;

    setInterval(function(){

        self.emit("tick-tock");

    },1000);
};

util.inherits(Reloj,EventEmitter);

module.exports = Reloj;
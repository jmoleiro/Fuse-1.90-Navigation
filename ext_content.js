var Observable = require("FuseJS/Observable");

var received = Observable();
received.value = "It's not working!";

this.Parameter.onValueChanged(module, function(param) {
    if (param != undefined) {
        console.log("ovc: "+JSON.stringify(param));
        received.value = param.id    
    }
});

module.exports = {
    received: received
}



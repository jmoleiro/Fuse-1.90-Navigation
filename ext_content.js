var Observable = require("FuseJS/Observable");

received = this.Parameter.map(module, function(param) {
    console.log("map: "+JSON.stringify(param));
    return param.id;
});

this.Parameter.onValueChanged(module, function(param) {
    console.log("ovc: "+JSON.stringify(param));
});

module.export = {
    received: this.Parameter.map(module, function(param) {
        console.log("map: "+JSON.stringify(param));
        return param.id;
    })  
}
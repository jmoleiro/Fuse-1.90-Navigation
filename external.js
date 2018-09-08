var Observable = require("FuseJS/Observable");

function goHome() {
    router.push("main");
}

var routeContent = function(args) {
    console.log(JSON.stringify(args));
    var obj =  { id: args.id, title: args.title };
    console.log(JSON.stringify(obj));
    //router.push("content", { id: args.id, title: args.title });
    router.push("content", obj);
}

module.exports = {
    goHome: goHome,
    routeContent: routeContent,
}
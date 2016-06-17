var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var page;

exports.loaded = function(args) {
    page = args.object;
    var menu = page.getViewById("menu");
    // TODO: jak ustawiæ tutaj menu.left na -menu.style.with;
}

exports.signIn = function ( ) {
    var menu = page.getViewById("menu");
        menu.animate({
        translate: { x: menu.style.width, y: 0 },
        duration: 1000
        });

}

exports.place = function(args) {
    frameModule.topmost().navigate("views/place/place");
}
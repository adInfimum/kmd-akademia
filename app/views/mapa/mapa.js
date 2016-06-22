var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var page;

exports.loaded = function(args) {
    page = args.object;
    var menu = page.getViewById("menu");
    // TODO: jak ustawiæ tutaj menu.left na -menu.style.with;
}

exports.place = function (args) {
    frameModule.topmost().navigate("views/place/place");
}

exports.signIn = function ( ) {
    var menu = page.getViewById("menu");
        menu.animate({
        translate: { x: menu.style.width, y: 0 },
        duration: 1000
        });
}

exports.signOut = function () {
    var menu = page.getViewById("menu");
    menu.animate({
        translate: { x: -100 , y: 0 },
        duration: 1000
        });
}


function createViewModel() {
        var viewModel = new Observable();
        viewModel.counter = -10;
        viewModel.message = getMessage(viewModel.counter);

        viewModel.onTap = function () {
            this.counter++;
            this.set("message", getMessage(this.counter));
        }

        viewModel.list = ['Pole Mokotowskie, Warszawa', 'Bia³o³êka, Warszawa', 'M³ociny, Warszawa'];
        return viewModel;
    }
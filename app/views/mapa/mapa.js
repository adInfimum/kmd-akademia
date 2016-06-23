var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var page;
var menuOpen = false;

exports.loaded = function(args) {
    page = args.object;
    var menu = page.getViewById("menu");
    // TODO: jak ustawiæ tutaj menu.left na -menu.style.with;
}

exports.place = function (args) {
    frameModule.topmost().navigate("views/place/place");
}

exports.toggleMenu = function ( ) {
    var menu = page.getViewById("menu");
    var menuPanel = page.getViewById("menuPanel");
    var guzik = page.getViewById("guzik");
    var movex;

    if (menuOpen) {
        movex = 0;
        guzik.text = ">>";
    } else {
        movex = menu.style.width;
        guzik.text = "<<";
    }
    menuPanel.animate({
         translate: { x: movex, y: 0 },
         duration: 1000
    });
    menuOpen = !menuOpen;
}

exports.signOut = function () {
    var menu = page.getViewById("menuPanel");
    menu.animate({
        translate: { x: -50 , y: 0 },
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

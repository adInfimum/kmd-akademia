var selectedPlace = {
    name: "Rondo Waszyngtona",
    score: 5,
    comments: [
        "Na przystanki tramwajowe można się dostać tylko za pomocą schodów.",
        "Nie ma nawet podjazdów dla wózka czy windy.",
    ],
    author:"Zbigniew",
};

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = selectedPlace;
}

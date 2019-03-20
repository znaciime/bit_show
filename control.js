const controller = (function (data, ui) {

    function init() {
        console.log("App initialized");
        data.fetchShows(function (myShows) {
            console.log("CTRL", myShows);
            ui.displayShows(myShows)
        })
    }

    return {
        init
    }

})(dataModule, uiModule)
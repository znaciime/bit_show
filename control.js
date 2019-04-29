const controller = (function (data, ui) {

    function init() {
        console.log("App initialized");
        data.fetchShows()
            .then((shows) => {
                ui.displayShows(shows);
                

            })

        console.log("CTRL", Response);


    }

    return {
        init
    }

})(dataModule, uiModule)
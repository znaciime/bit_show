const dataModule = (() => {

    const API_URL = `http://api.tvmaze.com`;

    class Show {
        constructor(id, name, image, rating) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.rating = rating;
        }

        getInfo() {
            return `ID:${this.id}, NAME:${this.name}, RATING:${this.rating}`
        }
    }


    function fetchShows(onSuccessCallback) {

        $.get(`${API_URL}/shows`, function (showsArray) {
            console.log(showsArray);

            const myShows = showsArray
                .slice(0, 50)
                .map((show) => {
                    // const { id, name, image, rating } = show;
                    return new Show(show.id, show.name, show.image.medium, show.rating.average)
                })
            console.log(myShows);

            onSuccessCallback(myShows)
        })
    }

    return {
        fetchShows
    }
})()

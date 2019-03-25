const dataModule = (() => {

    const fetchShows = () => {
        class Show {
            constructor(id, name, image, rating) {
                this.id = id;
                this.name = name;
                this.image = image;
                this.rating = rating;
            }
        }

        const fetchPromise = fetch('http://api.tvmaze.com/shows')
            .then((response) => {
                return response.json()
            })
            .then((responseShows) => {
                console.log(responseShows);
                const shows = responseShows
                    .slice(0, 50)
                    .map((shows) => {
                        // const { id, name, image, rating } = show;
                        return new Show(shows.id, shows.name, shows.image.medium, shows.rating.average)
                    })

                console.log(shows);
                return shows

            })
        console.log(fetchPromise);
        return fetchPromise

    }
    // const API_URL = `http://api.tvmaze.com`;

    // class Show {
    //     constructor(id, name, image, rating) {
    //         this.id = id;
    //         this.name = name;
    //         this.image = image;
    //         this.rating = rating;
    //     }

    //     getInfo() {
    //         return `ID:${this.id}, NAME:${this.name}, RATING:${this.rating}`
    //     }
    // }


    // function fetchShows(onSuccessCallback) {

    //     $.get(`${API_URL}/shows`, function (showsArray) {
    //         console.log(showsArray);

    //         const myShows = showsArray
    //             .slice(0, 50)
    //             .map((show) => {
    //                 // const { id, name, image, rating } = show;
    //                 return new Show(show.id, show.name, show.image.medium, show.rating.average)
    //             })
    //         console.log(myShows);

    //         onSuccessCallback(myShows)
    //     })
    // }

    return {
        fetchShows
    }
})()

const uiModule = (function () {


    function displayShows(myShows) {
        console.log("displayShows", myShows);

        const displayMovies = []
        myShows.forEach(function (element) {

            displayMovies.push(element.image)
            const blok = $("<div>");

            const images = $("<img src=''>").attr("src", element.image);
            const name = $("<p>").text(` ${element.name} `)
            const rating = $("<p>").text(`rating: ${element.rating} `)

            blok.addClass("svidiv")
            blok.attr("id", `${element.id}`)
            blok.append(images, name, rating)
            $(".imgsetup").append(blok)

            $(".svidiv").on("click", function () {
                const id = $(this).attr("id");
                localStorage.setItem("showname", id);
                console.log(id);

                window.open("index2.html");





            })


        })

    }








    return {
        displayShows
    }





})()
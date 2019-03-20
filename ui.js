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
            blok.append(images, name, rating)
            $(".imgsetup").append(blok)
            const displayList = [];
            displayList.push(`${element.name}`);
            const selctopt = $("#sel");
            selctopt.append($('<option>', { value: 1, text: `${element.name}` }));



        })

    }
    $("select").on("keydown", function () {
        if (keyCode === 13) {
            const send = $(this, "option").val();
            localStorage.setItem("send", send);
            console.log(localStorage.getItem("send"))
        }



    })



    return {
        displayShows
    }





})()
const index2 = (() => {

    const idShow = localStorage.getItem("showname");
    console.log(idShow);
    const index2search = `http://api.tvmaze.com/shows/${idShow}?embed[]=episodes&embed[]=cast`;

    $.get(`${index2search}`, function (data2) {
        console.log(data2);


        const foot = $(".foot");
        const cast2 = data2.summary;
        const titles = $("<h1>").text(data2.name);
        const img2 = $("<img src='' >").attr("src", data2.image.medium);
        const blok2 = $(".index2div");
        blok2.append(titles);
        blok2.append(img2);
        foot.append(cast2);




    })


})()
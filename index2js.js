const index2 = (() => {

    const idShow = localStorage.getItem("showname");
    console.log(idShow);
    const index2search = `http://api.tvmaze.com/shows/${idShow}?embed[]=seasons&embed[]=cast`;

    $.get(`${index2search}`, function (singleShowData) {
        console.log(singleShowData);
        const castNames = [];
        const listactors = $(".castnames");

        singleShowData._embedded.cast.forEach(Element => {
            const listNames = $("<li>").text(Element.person.name)
            castNames.push(Element.person.name);
            listactors.append(listNames);

        });

        const foot = $(".foot");
        const cast = $(".cast");

        const summar = singleShowData.summary;
        const titles = $("<h1>").text(singleShowData.name);
        const img2 = $("<img src='' >").attr("src", singleShowData.image.medium);
        const blok2 = $(".index2div");
        blok2.append(titles);
        blok2.append(img2);
        foot.append(summar);
    })

})()
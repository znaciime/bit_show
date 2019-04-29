const uiModule = (function () {

// const displayMovies = []


let text=$('input');
let textvalue=text.val();

console.log(text.val())

// $(document).ready(function(){



// })



    function displayShows(shows) {
        console.log("displayShows", shows);


 


                
        shows.forEach(function (element) {
         
            // if(element.name.includes(text.val())){



            // }
                
            // displayMovies.push(element.image)
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

   text.on('change', function(event){
            event.preventDefault();
                console.log(text.val());
               const filteredShows=shows.filter(element=> element.name.toLowerCase().includes(text.val()));
                console.log(filteredShows);
                $(".svidiv").remove();
                filteredShows.forEach(function (element) {
         
                    
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

        })

   
console.log(shows);
    }
 

           
   

        
          


    return {
        displayShows
    }





})()
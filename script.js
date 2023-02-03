const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62337aa5970fc268376106a65fb270cd&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=62337aa5970fc268376106a65fb270cd&query=";

const main =  document.getElementById("section");
const form =  document.getElementById("form");
const search =  document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class","card");

            const div_row = document.createElement("div");
            div_row.setAttribute("class","row");

            const div_column = document.createElement("div");
            div_column.setAttribute("class","column");

            const img = document.createElement("img");
            img.setAttribute("class","thumbnail");
            img.setAttribute("id","img");

            const title = document.createElement("h3");
            title.setAttribute("id","title");

            const center = document.createElement("center");

            title.innerHTML = `${element.title}`;
            img.src = IMG_PATH + element.poster_path;

            main.appendChild(div_row);
            div_row.appendChild(div_column);
            div_column.appendChild(div_card);
            div_card.appendChild(center);
            div_card.appendChild(title);
            center.appendChild(img);


        });
    });
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    main.innerHTML = "";

    const  searchItem = search.value;
    
    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
            // search.value = "";
    }
});
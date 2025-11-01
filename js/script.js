console.log("script.js loaded");
endpoint="https://api.giphy.com/v1/gifs/search?api_key=QC0ZmALB1039VA0CSlDY8QDkUA5IBxA6&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
images=[];
//asynchromous function to fetch gifs from giphy api
async function FetchGif() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    const gif=data.data[0];

    const output = document.getElementById("gif-container"); 
    output.textContent = gif;
};
//event listener for button to fetch gifs on click
let GifContainer=document.querySelector("#gif-container");
let button=document.querySelector("#fetch-gif-btn");
button.addEventListener("click", async function(){
    let response=await fetch(endpoint);
    let data=await response.json();
    console.log(data);
    let gif=data.data[0];
    GifContainer.innerHTML = ""; 
    const images = data.data.map(gif => gif.images.original.url);
    for (const imageUrl of images) {
        GifContainer.innerHTML += `<img src="${imageUrl}" alt="dog gif" class="col-3 mb-3">`;
    }

});

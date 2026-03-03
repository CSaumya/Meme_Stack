let img = document.querySelector(".meme img");

async function randomMemeGenerator() {
    let res = await fetch('https://meme-api.com/gimme');

    let data = await res.json();
    let url = data.url;
    img.src= url;

}

randomMemeGenerator();

let timer = setInterval(randomMemeGenerator, 2000);

img.addEventListener('mouseover', function() {
    clearInterval(timer);
});

img.addEventListener('mouseleave', function() {
    timer = setInterval(randomMemeGenerator, 2000);
});
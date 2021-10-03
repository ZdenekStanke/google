let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let Autoclicker= document.getElementById("autoclicker");
let Double=document.getElementById("Double");
let Triple=document.getElementById("Triple");


let cookies = 1;
let click = 1;

const zmena = () => {
    cookies = cookies + click;
    counter.innerText = "Score: " + cookies;
    console.log("cokoliv");
};
cookie.onclick = zmena;


let autoclickerInterval;

const buyAutoclicker = () => {
    if (cookies >= 400) {
        Autoclicker.style.display = "none";
        /** upgrade.style.display = "block";
         **/
        cookies = cookies - 400;
        autoclickerInterval = setInterval(() => {
            cookies++;
            counter.innerText = "Score: " + cookies;
        }, 200);
    }
};
Autoclicker.onclick = buyAutoclicker;
const buydouble = () => {
    if (cookies >= 20) {
        cookies = cookies - 20;
        Double.style.display = "none";
        click = 2;
        counter.innerText = "Score: " + cookies;
    }
};
Double.onclick = buydouble;



const buyTriple = () => {
    if (cookies >= 50) {
        cookies = cookies - 50;
        Triple.style.display = "none";
        click = 3;
        counter.innerText = "Score: " + cookies;
    }
};
Triple.onclick = buyTriple;

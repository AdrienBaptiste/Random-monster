var id = 1;
var srcImg1 = "image/monstre1";
var srcImg2 = "image/monstre1";
var srcImg3 = "image/monstre1";
const imgContainer1 = document.querySelector(".container1 img");
const imgContainer2 = document.querySelector(".container2 img");
const imgContainer3 = document.querySelector(".container3 img");
const button = document.querySelector(".button_container button");


function randomId () {
    id = Math.floor(Math.random() * 5);
    console.log(id);
}

function changeLink () {
    randomId();
    imgContainer1.src = "images/monstre" + id + ".png";
    randomId();
    imgContainer2.src = "images/monstre" + id + ".png";
    randomId();
    imgContainer3.src = "images/monstre" + id + ".png";
}

button.addEventListener('click', function() {
    changeLink();
});


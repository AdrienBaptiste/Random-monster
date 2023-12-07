var id = 1;
const imgContainer1 = document.querySelector(".container1 img");
const imgContainer2 = document.querySelector(".container2 img");
const imgContainer3 = document.querySelector(".container3 img");

var srcImg1 = "image/monstre1";
var srcImg2 = "image/monstre1";
var srcImg3 = "image/monstre1";

const button = document.querySelector(".button_container button");

var lien = "images/monstre" + id + ".png";
/*
button.addEventListener('click', function() {
    id = Math.floor(Math.random() * 2)
    srcImg1 = "images/monstre" + id + ".png";
    id = Math.floor(Math.random() * 2)
    srcImg2 = "images/monstre" + id + ".png";
    id = Math.floor(Math.random() * 2)
    srcImg3 = "images/monstre" + id + ".png";
    setTimeout(() => {
        imgContainer1.src = srcImg1
        imgContainer2.src = srcImg2
        imgContainer3.src = srcImg3
      }, 300);
});

*/
function randomId () {
    id = Math.floor(Math.random() * 3);
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
    changeLink(lien);
});


var id1 = 1;
var id2 = 1;
var id3 = 1;
var srcImg1 = "image/monstre1";
var srcImg2 = "image/monstre1";
var srcImg3 = "image/monstre1";
const range = 12;
const imgContainer1 = document.querySelector(".container1 img");
const imgContainer2 = document.querySelector(".container2 img");
const imgContainer3 = document.querySelector(".container3 img");
const generateBtn = document.querySelector(".button_container .genererBtn");
const downloadBtn = document.querySelector(".button_container .telechargerBtn");


function randomId1 () {
    id1 = Math.floor(Math.random() * range);
}
function randomId2 () {
    do {
        id2 = Math.floor(Math.random() * range);
    } while (id2 === id1);
}
function randomId3 () {
    do {
        id3 = Math.floor(Math.random() * range);
    } while (id3 === id2 || id3 === id1);
}

function changeLink () {
    randomId1();
    imgContainer1.src = "images/monstre" + id1 + ".png";
    randomId2();
    imgContainer2.src = "images/monstre" + id2 + ".png";
    randomId3();
    imgContainer3.src = "images/monstre" + id3 + ".png";
}

generateBtn.addEventListener('click', function() {
    changeLink();
});

downloadBtn.addEventListener("click", () => {
    const grille = document.querySelector(".container")
    html2canvas(grille).then((canvas) => {
        const base64Image = canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", base64Image);
        anchor.setAttribute("download", "monstre.png")
        anchor.click();
        anchor.remove();
    })
});

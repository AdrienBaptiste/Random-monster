var id = 1;
var srcImg1 = "image/monstre1";
var srcImg2 = "image/monstre1";
var srcImg3 = "image/monstre1";
const imgContainer1 = document.querySelector(".container1 img");
const imgContainer2 = document.querySelector(".container2 img");
const imgContainer3 = document.querySelector(".container3 img");
const generateBtn = document.querySelector(".button_container .genererBtn");
const downloadBtn = document.querySelector(".button_container .telechargerBtn");


function randomId () {
    id = Math.floor(Math.random() * 6);
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


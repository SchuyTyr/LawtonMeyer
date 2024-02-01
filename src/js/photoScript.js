/*-- photoScript.js // Schuyler Meyer // 2022-24 --*/

const modal = document.getElementById('photoModal');
const images = document.querySelectorAll(".containerGrid img");
const body = document.getElementById('fullBody');
const html = document.documentElement;

let modalImg = document.getElementById("img01");

var close = document.getElementById("closeButton");

var scrollTop = document.getElementById("toTopButton");

var noScroll = true;
var modalOpen = false;


images.forEach((img) => {
    img.addEventListener("click", (e) => {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;
    });
});

//async function names(img, e) {

//    await getExif(img);

//    setTimeout(() => {

//        if ((!imgTitle || imgTitle === "Untitled") && e.target.title) {
//            modalImg.title = e.target.title;
//            modalImg.alt = e.target.title;
//            modalImg.style.marginBottom = "24px";
//            modalImgCapt.innerHTML = "<span>" + modalImg.title + "</span>";
//        }
//        else if (imgTitle && imgTitle !== "Untitled") {
//            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
//            modalImg.title = imgTitle;
//            modalImg.alt = imgTitle;
//            modalImg.style.marginBottom = "5px";
//        }
//        else {
//            modalImgCapt.innerHTML = "";
//            modalImg.title = "";
//            modalImg.alt = "";
//            modalImg.style.marginBottom = "24px";
//        }

//        noScrollF();
//        scrollTop.style.display = "none";
//        html.style.overflow = "hidden";
//        topBtn = true;
//        modalOpen = true;

//    }, 500);
//}

// Not currently working
//window.onclick = function (event) {
//    if (event.currentTarget == modal && modalOpen) {
//		modal.style.display = "none";
//		noScrollF();
//        html.style.overflow = "revert";
//        topBtn = false;
//        modalOpen = false;
//        //imgTitle = "";

//        console.log("here 2");
//	}
//}

close.onclick = function (event) {
    if (modalOpen) {
        modal.style.display = "none";
        noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
    }
}

function noScrollF() {
    body.classList.toggle('noscroll');
}



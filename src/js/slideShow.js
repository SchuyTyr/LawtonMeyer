/*-- slideShow.js // Schuyler Meyer // 2021 --*/

var myIndex = 0;

var timer;

//var slideCnt = 0;
//carousel(1);

function carousel(inc = 1) {
    var i;
    var x = document.getElementsByClassName("slides");

    //clear/stop the timer
    clearTimeout(timer);

    //var sc = document.getElementById("slideCounter");
    //var slideTotal = 0;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    //slideTotal = x.length;

    myIndex += inc;
    //slideCnt++;

    if (myIndex > x.length) {
        myIndex = 1;
        //slideCnt = 1;
    }

    if (myIndex <= 0) {
        myIndex = x.length;
    }

    //sc.innerHTML = "&mdash;&nbsp;"+ slideCnt +"&nbsp;/&nbsp;"+ slideTotal +"&nbsp;&mdash;";

    x[myIndex - 1].style.display = "block";
    //console.log("index: " + myIndex);
    //setTimeout(carousel, 6000); // Change image every 6 seconds
    //setInterval(carousel, 6000); // Change image every 6 seconds

    timer = setInterval(carousel, 6000);

}

//function startTimer() {
//    //setInterval(carousel, 6000);
//    timer = setInterval(carousel, 2000);
//}

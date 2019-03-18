// var gridbox1 = document.getElementsByClassName('flexgrid1');
// var gridbox2 = document.getElementsByClassName('flexgrid2');

$("#first").on('click', toggle1);
$("#second").on('click', toggle2);
$("#switch").on('click', flip);
$("#chart1").on('click', chartAtoggle);
$("#chart2").on('click', chartBtoggle);
$("#chart3").on('click', chartCtoggle);

var gridbox1 = document.getElementById('flexgridA');
var gridbox2 = document.getElementById('flexgridB');
var chartA = document.getElementById('chart1');
var chartB = document.getElementById('chart2');
var chartC = document.getElementById('chart3');
var disclaim = document.getElementById('disclaimer');

function toggle1() {
    if (gridbox1.style.visibility === "hidden") {
    gridbox1.style.visibility = "visible", gridbox1.style.opacity = 1;
    } else {
    gridbox1.style.visibility = "hidden", gridbox1.style.opacity = 0;
    }
  }


function toggle2() {
    if (gridbox2.style.visibility === "hidden") {
    gridbox2.style.visibility = "visible", gridbox2.style.opacity = 1;
    } else {
    gridbox2.style.visibility = "hidden", gridbox2.style.opacity = 0;
    }
}

function flip() {
    if (gridbox1.style.visibility === "hidden") {
    gridbox1.style.visibility = "visible", gridbox1.style.opacity = 1, gridbox2.style.visibility = "hidden", gridbox2.style.opacity = 0;
    } else {
    gridbox1.style.visibility = "hidden", gridbox1.style.opacity = 0, gridbox2.style.visibility = "visible", gridbox2.style.opacity = 1;
    }
}


function chartAtoggle() {
    chartA.classList.remove("button");
    disclaim.style.opacity = 1;
    } 

function chartBtoggle() {
    chartB.classList.remove("button");
    setTimeout(chartBtext, 400);
    } 

function chartBtext() {
    $("#chartbutton").html("Sell Rate");
    chartA.classList.remove("button");
    chartC.classList.remove("button");
    disclaim.style.opacity = 1;
}

function chartCtoggle() {
    chartC.classList.remove("button");
    disclaim.style.opacity = 1;
    } 

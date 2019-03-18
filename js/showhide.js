var strategycheck = document.querySelector("#checkbox_strategy");
var researchcheck = document.querySelector("#checkbox_research");
var deliverycheck = document.querySelector("#checkbox_delivery");

// var strategycheck = document.querySelector("input[type=checkbox]");
var strategies = document.querySelectorAll(".strategy");
var researches = document.querySelectorAll(".research");
var deliveries = document.querySelectorAll(".delivery");

function strategytrigger() {
        strategycheck.addEventListener("change", function() {
        for (var i=0; i<strategies.length; i++) {
          if (this.checked) {
            strategies[i].style.display = "flex";
          } else {
            strategies[i].style.display = "none";
          }
        }
    });
}

function researchtrigger() {
        researchcheck.addEventListener("change", function() {
        for (var i=0; i<researches.length; i++) {
          if (this.checked) {
            researches[i].style.display = "flex";
          } else {
            researches[i].style.transform = "scale(0)";
            // setTimeout(researchhide, 50);
            setTimeout(function() {researches[i].style.display = "none"}, 50);
            // setTimeout(function() {console.log("1000 milliseconds have elapsed");}, 1000);
          }
        }
    });
}

function deliverytrigger() {
        deliverycheck.addEventListener("change", function() {
        for (var i=0; i<deliveries.length; i++) {
          if (this.checked) {
            deliveries[i].style.display = "flex";
          } else {
            deliveries[i].style.display = "none";
          }
        }
    });
}

// function strategyhide() {strategies[i].style.display = "none"};
// function researchhide() {researches[i].style.display = "none"};
// function deliveryhide() {deliveries[i].style.display = "none"};


window.onload = function() {
    strategytrigger();
    researchtrigger();
    deliverytrigger();
}


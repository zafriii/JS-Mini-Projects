var body = document.querySelector("body");
var sidebar = document.querySelector(".sidebar");
var toggle = document.querySelector(".toggle");
var text = document.querySelector(".header-text");
var searchBtn = document.querySelector(".search-box");
var modeSwitch = document.querySelector(".toggle-switch");
var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon");
var circle = document.querySelector(".circle");

var check = 0;

modeSwitch.addEventListener("click", function(){

if(check==0){

    body.style.background = "#18191A";
    sidebar.style.background = "#324069";
    sun.style.display = "block";
    moon.style.display ="none";
    circle.style.marginLeft = "30px";
    text.style.color = "#fff";

    document.querySelectorAll(".nav-text")[0].style.color="#fff";
    document.querySelectorAll(".nav-text")[1].style.color="#fff";
    document.querySelectorAll(".nav-text")[2].style.color="#fff";
    document.querySelectorAll(".nav-text")[3].style.color="#fff";
    document.querySelectorAll(".nav-text")[4].style.color="#fff";
    document.querySelectorAll(".nav-text")[5].style.color="#fff";
    document.querySelectorAll(".nav-text")[6].style.color="#fff";

    document.querySelectorAll("i")[2].style.color="#fff";
    document.querySelectorAll("i")[3].style.color="#fff";
    document.querySelectorAll("i")[4].style.color="#fff";
    document.querySelectorAll("i")[5].style.color="#fff";
    document.querySelectorAll("i")[6].style.color="#fff";
    document.querySelectorAll("i")[7].style.color="#fff";
    document.querySelectorAll("i")[8].style.color="#fff";

    
    check = 1;
}

else
{
    body.style.background = "#E4E9F7";
    sidebar.style.background = "#fff";
    sun.style.display = "none";
    moon.style.display ="block";
    circle.style.marginLeft = "5px";
    text.style.color = "black";

    document.querySelectorAll(".nav-text")[0].style.color="black";
    document.querySelectorAll(".nav-text")[1].style.color="black";
    document.querySelectorAll(".nav-text")[2].style.color="black";
    document.querySelectorAll(".nav-text")[3].style.color="black";
    document.querySelectorAll(".nav-text")[4].style.color="black";
    document.querySelectorAll(".nav-text")[5].style.color="black";
    document.querySelectorAll(".nav-text")[6].style.color="black";


    document.querySelectorAll("i")[2].style.color="black";
    document.querySelectorAll("i")[3].style.color="black";
    document.querySelectorAll("i")[4].style.color="black";
    document.querySelectorAll("i")[5].style.color="black";
    document.querySelectorAll("i")[6].style.color="black";
    document.querySelectorAll("i")[7].style.color="black";
    document.querySelectorAll("i")[8].style.color="black";


    check = 0;
}
    
});



toggle.addEventListener("click", function(){

     sidebar.classList.toggle("close");
    text.style.display = "none;"

    
})

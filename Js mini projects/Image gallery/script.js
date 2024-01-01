let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft += 500;
});

backBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft -= 500;
})
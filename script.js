let scrollContainer=document.querySelector(".gallary");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click",()=>{
    console.log("hello");
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
});
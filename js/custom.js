// document.getElementById("demo").onclick = function() {myFunction()};
let photoRotation=360;
gsap.to(".photoMine", { duration: 1, rotationY: photoRotation, opacity: 1 });
let photoMine = document.getElementById("photoMine");
photoMine.addEventListener("click", function (e) {
    if(photoRotation ===360){        
        photoRotation-=360;
        gsap.to(".photoMine", {duration: 1, rotationY: photoRotation, opacity: 1});
    }else{
        photoRotation+=360;
        gsap.to(".photoMine", {duration: 1, rotationY: photoRotation+360, opacity: 1});
    }    
});

let AboutMeClick = document.getElementById("AboutMeClick");
let WorkClick = document.getElementById("WorkClick");
AboutMeClick.addEventListener("click",function(){
    let aboutMeDiv = document.getElementById("AboutUsDiv");
    aboutMeDiv.scrollIntoView({behavior: "smooth"});
})
WorkClick.addEventListener("click",function(){
    let workDiv = document.getElementById("workDiv");
    workDiv.scrollIntoView({behavior: "smooth"});
})
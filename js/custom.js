// document.getElementById("demo").onclick = function() {myFunction()};
// let photoMine =document.getElementById("photoMine")
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
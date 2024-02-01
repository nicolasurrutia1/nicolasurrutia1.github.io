// document.getElementById("demo").onclick = function() {myFunction()};
let photoRotation = 360;
gsap.to(".photoMine", { delay: 1, duration: 1, rotationY: photoRotation, opacity: 1 });
let photoMine = document.getElementById("photoMine");
photoMine.addEventListener("click", function (e) {
    if (photoRotation === 360) {
        photoRotation -= 360;
        gsap.to(".photoMine", { duration: 1, rotationY: photoRotation, opacity: 1 });
    } else {
        photoRotation += 360;
        gsap.to(".photoMine", { duration: 1, rotationY: photoRotation + 360, opacity: 1 });
    }
});

gsap.to(".textAnim", { delay: 0.5, duration: 1, opacity: 1 });

let AboutMeClick = document.getElementById("AboutMeClick");
let WorkClick = document.getElementById("WorkClick");
let skillClick = document.getElementById("skillClick");
AboutMeClick.addEventListener("click", function () {
    let aboutMeDiv = document.getElementById("AboutMe");
    aboutMeDiv.scrollIntoView({ behavior: "smooth" });
})
WorkClick.addEventListener("click", function () {
    let workDiv = document.getElementById("workDiv");
    workDiv.scrollIntoView({ behavior: "smooth" });
})
skillClick.addEventListener("click", function () {
    let skillDiv = document.getElementById("skillDiv");
    skillDiv.scrollIntoView({ behavior: "smooth" });
})

var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 3000
});

splide.mount();
// document.getElementById("demo").onclick = function() {myFunction()};
gsap.registerPlugin(ScrollTrigger)
gsap.from(".fade-in-01", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-01",
    start: "top 70%",
    // markers: true,
  },
});
gsap.from(".fade-in-02", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-02",
    start: "top 70%",
  },
});
gsap.from(".fade-in-03", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-03",
    start: "top 70%",
  },
});

gsap.registerPlugin();

let rotated = false;
document.getElementById("photoMine").addEventListener("click", function () {
  rotated = !rotated;
  gsap.to("#photoMine", {
    duration: 1,
    rotationY: rotated ? 180 : 0,
    ease: "power2.inOut",
  });
});

let AboutMeClick = document.getElementById("AboutMeClick");
let WorkClick = document.getElementById("WorkClick");
let skillClick = document.getElementById("skillClick");
AboutMeClick.addEventListener("click", function (event) {
  event.preventDefault();
  let aboutMeDiv = document.getElementById("AboutMe");
  aboutMeDiv.scrollIntoView({ behavior: "smooth" });
})
WorkClick.addEventListener("click", function (event) {
  event.preventDefault();
  let workDiv = document.getElementById("workDiv");
  workDiv.scrollIntoView({ behavior: "smooth" });
})
skillClick.addEventListener("click", function (event) {
  event.preventDefault();
  let skillDiv = document.getElementById("skillDiv");
  skillDiv.scrollIntoView({ behavior: "smooth" });
})

var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 3500
});
splide.mount();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 250,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
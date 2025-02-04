// Horizonal Scroll Image
gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, 
        // thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

// Boxes A
gsap.registerPlugin(ScrollTrigger);

gsap.to(".a", {
    scrollTrigger: {
        trigger: ".a",
        start: "top center",
        end: () => `+=${window.innerHeight}`,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    },
    x: () => window.innerWidth,
    rotation: 360,
    duration: 3
});

// Boxes B
gsap.registerPlugin(ScrollTrigger);

gsap.to(".b", {
    scrollTrigger: {
        trigger: ".b",
        start: "top center",
        end: () => `+=${window.innerHeight}`,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    },
    x: () => window.innerWidth,
    rotation: 360,
    duration: 3
});

// Boxes C
gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: () => `+=${window.innerHeight}`,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    },
    x: () => window.innerWidth,
    rotation: 360,
    duration: 3
});

// Gallery Stacking Image
//Get all image container
let childElement = document.querySelectorAll(".image-container");

//Array of image URLs
let imageUrls = [
    "static/images/project-game.png", 
    "static/images/project-grogu.png", 
    "static/images/project-hike.png", 
    "static/images/project-kmc.png", 
    "static/images/project-roku.png"
];


//Initial z-index value
let zIndex = 1;

//Iterate through each image container
childElement.forEach((element, index) => {
  //Create an image element
  let img = document.createElement("img");
  img.setAttribute("src", imageUrls[index]);
  img.setAttribute("class", "image");
  element.appendChild(img);

  //Add a click event listener to each image container
  element.addEventListener("click", () => {
    zIndex++;
    element.style.right = "50em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";

    //Apply transition to right property
    element.style.transition = " right 0.3s ease";

    //Remomve the class and reset properties after a delay
    setTimeout(() => {
      zIndex -= 3;
      element.style.right = "";
      element.style.zIndex = zIndex.toString();
      element.style.transform = "";

      //Clear the transition property after a slight delay
      setTimeout(() => {
        element.style.transition = "";
      }, 300);
    }, 1000);
  });
});
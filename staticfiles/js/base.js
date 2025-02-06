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

// Horizontal Panels
gsap.registerPlugin(ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});
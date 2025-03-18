// Lylo Circle
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Create a GSAP timeline with scrollTrigger
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project-details-first",
            start: "top bottom",
            end: "top 20%",
            scrub: 3,
            immediateRender: false,
        }
    });

    // First movement: Move left and down
    tl.to(".lylo-circle", {
        x: "-90vw", 
        y: "50vh", 
        rotation: 360,
		duration: 2.5,
        ease: "power1.out"
    });

    // Second movement: Follow a curved path with slower transition
    tl.to(".lylo-circle", {
        motionPath: {
            path: [
				{ x: "-90vw", y: "50vh" },
				{ x: "-90vw", y: "50.5vh" },
				{ x: "-80vw", y: "50.7vh" },
				{ x: "-75vw", y: "51vh" },
				{ x: "-72vw", y: "55vh" },
				{ x: "-71vw", y: "65vh" },
				{ x: "-70.5vw", y: "75vh" },
				{ x: "-70vw", y: "90vh" }
			],
            curviness: 1.5, 
            autoRotate: false
        },
		duration: 4,
        ease: "power2.out"
    });

	// **Bounce effect at the end**
	tl.to(".lylo-circle", {
		y: "93vh", // Small bounce downward
		duration: 0.5, 
		ease: "power2.inOut",
		repeat: 6, // Number of bounces
		yoyo: true // Moves back up after each bounce
	});

	// **Reverse Motion - Moves back up when scrolling back up**
	tl.to(".lylo-circle", {
		motionPath: {
			path: [
				{ x: "-70vw", y: "90vh" },  
				{ x: "-70.5vw", y: "75vh" },  
				{ x: "-71vw", y: "65vh" },  
				{ x: "-72vw", y: "55vh" },  
				{ x: "-75vw", y: "51vh" },  
				{ x: "-80vw", y: "50.7vh" }, 
				{ x: "-85vw", y: "50.5vh" }, 
				{ x: "-90vw", y: "50vh" }  // Returns to start position
			],
			curviness: 2, 
			autoRotate: false
		},
		duration: 2.5,
		ease: "power2.out"
	});

	// Move off-screen to the left
	tl.to(".lylo-circle", {
		x: "-120vw", // Move far left off the screen
		duration: 1.5, 
		ease: "power2.inOut"
	});
});


// Change background colours
$(document).ready(function() {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        var imageBottom = $(".image-home-2").length ? $(".image-home-2").offset().top + $(".image-home-2").outerHeight() : 0;
        var firstColorChange = $(".colorChangeFirstPoint").length ? $(".colorChangeFirstPoint").offset().top + $(".colorChangeFirstPoint").outerHeight() : 0;
        var secondColorChange = $(".colorChangeSecondPoint").length ? $(".colorChangeSecondPoint").offset().top + $(".colorChangeSecondPoint").outerHeight() : 0;
        var thirdColorChange = $(".colorChangeThirdPoint").length ? $(".colorChangeThirdPoint").offset().top + $(".colorChangeThirdPoint").outerHeight() : 0;
        var fourthColorChange = $(".colorChangeFourthPoint").length ? $(".colorChangeFourthPoint").offset().top + $(".colorChangeFourthPoint").outerHeight() : 0;

        // First section: Pink
        if (scrollTop >= imageBottom && scrollTop < firstColorChange) {
            $('body').addClass('changeColorPink').removeClass('changeColorGreen changeColorLightGreen changeColorBlue');
            $('.project-details-first').addClass('textColorChangeMoron').removeClass('textColorChangeBeige');
        } 
        // Second section: Green
        else if (scrollTop >= firstColorChange && scrollTop < secondColorChange) {
            $('body').addClass('changeColorGreen').removeClass('changeColorPink changeColorLightGreen changeColorBlue');
            $('.project-details-second').addClass('textColorChangeBeige').removeClass('textColorChangeMoron');
        } 
        // Third section: Light Green
        else if (scrollTop >= secondColorChange && scrollTop < thirdColorChange) {
            $('body').addClass('changeColorLightGreen').removeClass('changeColorPink changeColorGreen changeColorBlue');
            $('.project-details-third').addClass('textColorChangeGreen').removeClass('textColorChangeBeige');
        } 
        // Fourth section: Blue
        else if (scrollTop >= thirdColorChange) {
            $('body').addClass('changeColorBlue').removeClass('changeColorPink changeColorGreen changeColorLightGreen');
            $('.project-details-fourth').addClass('textColorChangeMoron').removeClass('textColorChangeBeige');
        } 
        // Reset if above first section
        else {
            $('body').removeClass('changeColorPink changeColorGreen changeColorLightGreen changeColorBlue');
            $('.project-details-first, .project-details-second, .project-details-third, .project-details-fourth')
                .removeClass('textColorChangeMoron textColorChangeBeige textColorChangeGreen');
        }
    });
});

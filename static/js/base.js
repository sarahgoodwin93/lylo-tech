// Lylo Circle
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".lylo-circle", {
        x: "-90vw", // Moves left
        y: "50vh", // Moves down
        rotation: 360,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".project-details-roku",
            start: "top bottom",
            end: "top center",
            scrub: true,
			immediateRender: false
        }
    });
});


// Change background colour Roku
$(document).ready(function() {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        var imageBottom = 0;
        var sectionBottom = 0;

        // Check if .image-home-2 exists before using offset()
        if ($(".image-home-2").length) {
            imageBottom = $(".image-home-2").offset().top + $(".image-home-1").outerHeight();
        } else {
            console.warn("Warning: .image-home-2 not found!");
        }

        // Check if .colorChangeKMCPoint exists before using offset()
        if ($(".colorChangeKMCPoint").length) {
            sectionBottom = $(".colorChangeKMCPoint").offset().top + $(".colorChangeKMCPoint").outerHeight();
        } else {
            console.warn("Warning: .colorChangeKMCPoint not found!");
        }

        console.log("Scroll Position:", scrollTop);
        console.log("Image Bottom:", imageBottom);
        console.log("Section Bottom:", sectionBottom);

        // Change background and text color when .image-home-2 is out of viewport
        if (scrollTop >= imageBottom && scrollTop < sectionBottom) {
            $('body').addClass('changeColorPink').removeClass('changeColorGreen');
            $('.project-details-roku').addClass('textColorChangeMoron').removeClass('textColorChangeBeige');
        } 
        // Change background for KMC section
        else if (scrollTop >= sectionBottom) {
            $('body').addClass('changeColorGreen').removeClass('changeColorPink');
            $('.project-details-kmc').addClass('textColorChangeBeige').removeClass('textColorChangeMoron');
        } 
        // Reset to default if scrolled above
        else {
            $('body').removeClass('changeColorPink changeColorGreen');
            $('.project-details-roku').removeClass('textColorChangeMoron');
            $('.project-details-kmc').removeClass('textColorChangeBeige');
        }
    });
});

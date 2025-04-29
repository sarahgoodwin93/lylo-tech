// Lylo Circle
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project-details-first",
            start: "top bottom",
            end: "+=2000",
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
                { x: "-70vw", y: "50.7vh" },
                { x: "-65vw", y: "51vh" },
                { x: "-62vw", y: "55vh" },
                { x: "-61vw", y: "65vh" },
                { x: "-60.5vw", y: "75vh" },
                { x: "-60vw", y: "90vh" }
            ],
            curviness: 1.5, 
            autoRotate: false
        },
        duration: 4,
        ease: "power2.out"
    });

    // **Reverse Motion - Moves back up**
    tl.to(".lylo-circle", {
        motionPath: {
            path: [
                { x: "-60vw", y: "90vh" },  
                { x: "-60.5vw", y: "75vh" },  
                { x: "-61vw", y: "65vh" },  
                { x: "-62vw", y: "55vh" },  
                { x: "-65vw", y: "51vh" },  
                { x: "-70vw", y: "50.7vh" }, 
                { x: "-85vw", y: "50.5vh" }, 
                { x: "-90vw", y: "50vh" }  
            ],
            curviness: 2, 
            autoRotate: false
        },
        duration: 2.5,
        ease: "power2.out"
    });

    // Move off-screen to the left
    tl.to(".lylo-circle", {
        x: "-120vw", 
        duration: 1.5, 
        ease: "power2.inOut"
    });
});


// Second Circle
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Start second circle trigger
    let newTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".colorChangeFirstPoint",
            start: "top top",
            end: "+=400",
            scrub: 5, 
        }
    });

    // Move across the screen from right to left
    newTl.to(".lylo-circle-2", {
        x: "-120vw",
        duration: 5,
        ease: "power2.inOut",
    });
});

// Change background colours
$(document).ready(function() {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        console.log('ScrollTop:', scrollTop);

        var defaultColorChange = $(".colorChangeDefaultPoint").length ? $(".colorChangeDefaultPoint").offset().top : 0;
        var firstColorChange = $(".colorChangeFirstPoint").length ? $(".colorChangeFirstPoint").offset().top : 0;
        var secondColorChange = $(".colorChangeSecondPoint").length ? $(".colorChangeSecondPoint").offset().top : 0;
        var thirdColorChange = $(".colorChangeThirdPoint").length ? $(".colorChangeThirdPoint").offset().top : 0;
        var fourthColorChange = $(".colorChangeFourthPoint").length ? $(".colorChangeFourthPoint").offset().top : 0;

        console.log('defaultColorChange:', defaultColorChange);
        console.log('firstColorChange:', firstColorChange);
        console.log('secondColorChange:', secondColorChange);
        console.log('thirdColorChange:', thirdColorChange);
        console.log('fourthColorChange:', fourthColorChange);

        if (scrollTop < firstColorChange) {
            console.log('Setting background to DEFAULT (#fffff4)');
            $('body')
                .removeClass('changeColorPink changeColorGreen changeColorLightGreen changeColorBlue')
                .addClass('defaultBackground');
            $('.project-details-first, .project-details-second, .project-details-third, .project-details-fourth')
                .removeClass('textColorChangeMoron textColorChangeBeige textColorChangeGreen');
        }
        else if (scrollTop >= firstColorChange && scrollTop < secondColorChange) {
            console.log('Setting background to PINK');
            $('body')
                .removeClass('defaultBackground changeColorGreen changeColorLightGreen changeColorBlue')
                .addClass('changeColorPink');
            $('.project-details-first')
                .addClass('textColorChangeMoron')
                .removeClass('textColorChangeBeige');
        } 
        else if (scrollTop >= secondColorChange && scrollTop < thirdColorChange) {
            console.log('Setting background to GREEN');
            $('body')
                .removeClass('defaultBackground changeColorPink changeColorLightGreen changeColorBlue')
                .addClass('changeColorGreen');
            $('.project-details-second')
                .addClass('textColorChangeBeige')
                .removeClass('textColorChangeMoron');
        } 
        else if (scrollTop >= thirdColorChange && scrollTop < fourthColorChange) {
            console.log('Setting background to LIGHT GREEN');
            $('body')
                .removeClass('defaultBackground changeColorPink changeColorGreen changeColorBlue')
                .addClass('changeColorLightGreen');
            $('.project-details-third')
                .addClass('textColorChangeGreen')
                .removeClass('textColorChangeBeige');
        } 
        else if (scrollTop >= fourthColorChange) {
            console.log('Setting background to BLUE');
            $('body')
                .removeClass('defaultBackground changeColorPink changeColorGreen changeColorLightGreen')
                .addClass('changeColorBlue');
            $('.project-details-fourth')
                .addClass('textColorChangeMoron')
                .removeClass('textColorChangeBeige');
        }
    });
});

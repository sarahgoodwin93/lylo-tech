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

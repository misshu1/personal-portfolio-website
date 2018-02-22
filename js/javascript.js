// Animation for the Showcase area, change image on click //

$(document).ready(function() {
    $('.top-box-a').click(function() {
        $('.showcase').css({
            'background': 'url(/img/showcase1.jpg) no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });
});

$(document).ready(function() {
    $('.top-box-b').click(function() {
        $('.showcase').css({
            'background': 'url(/img/showcase2.jpg) no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });
});

$(document).ready(function() {
    $('.top-box-c').click(function() {
        $('.showcase').css({
            'background': 'url(/img/showcase3.jpg) no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });
});
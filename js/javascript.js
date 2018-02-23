// Animation for the Showcase area, change image on click
// And
// Change the showcase text on click //


// First showcase box //


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
    $('.top-box-a').on('click', function() {
        $('.showcase-title').empty();
        $('.showcase-title').append('Looking for a developer?');
        $('.showcase-description').empty();
        $('.showcase-description').append('I am currently searching for a Front-End Web Development internship or Junior position.');
    });
});


// Second showcase box //


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
    $('.top-box-b').on('click', function() {
        $('.showcase-title').empty();
        $('.showcase-title').append('Inspire');
        $('.showcase-description').empty();
        $('.showcase-description').append('Make your idea a reality.');
    });
});


// Third showcase box //


$(document).ready(function() {
    $('.top-box-c').click(function() {
        $('.showcase').css({
            'background': 'url(/img/showcase3.jpg) no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });
});

$(document).ready(function() {
    $('.top-box-c').on('click', function() {
        $('.showcase-title').empty();
        $('.showcase-title').append('Innovate');
        $('.showcase-description').empty();
        $('.showcase-description').append('Using the right tools for the job.');
    });
});
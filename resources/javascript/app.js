$(document).ready(function() {
    $('button').click(function() {
        if ($('body').hasClass('night')) {
            $('body').removeClass('night').addClass('day');
        } else {
            $('body').removeClass('day').addClass('night');
        }
    });

});
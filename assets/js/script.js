$(document).ready(function (){
    $('.menu-item').on('click', function (){
        var get_menu = $(this).attr('class').split(' ').pop();
        $('.other-div').fadeOut();
        $('.'+get_menu).fadeIn();
        $('.main-div').html(get_menu);
    })

})


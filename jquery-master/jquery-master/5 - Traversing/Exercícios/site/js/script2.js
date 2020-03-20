$(document).ready(function(){
    
    $('input').filter('[type=text]').parent().addClass('alert alert-info');


    $('.list-group-item').click(function(){
        $(this).removeClass('list-group-item-dark').addClass('list-group-item-info');

        $(this).siblings().addClass('list-group-item-dark');
    });

});
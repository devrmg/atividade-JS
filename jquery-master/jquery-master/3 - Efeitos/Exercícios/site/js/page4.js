$(function(){
    $('.btn-primary').click(function(){
        $('.cardUm').slideDown(6000);
        $('.cardDois').slideDown(3000);
        $('.cardTres').slideDown(1000);


        $('.btn-primary').addClass('btn-secundary')
        $('.btn-primary').removeClass('btn-primary')

        $('.btn-secundary').prop('disabled', true)

        // $('.btn-primary').css('display', 'none')
    });


    $('.cardUm').click(function(){
        $('.cardUm').css('display', 'none')
    });

    $('.cardDois').click(function(){
        $('.cardDois').css('display', 'none')
    });

    $('.cardTres').click(function(){
        $('.cardTres').css('display', 'none')
    });

    //Mais simples, sem tantas linhas de código
        //$('.card').click(function(){
        //       $(this).remove()
        //}); 
});
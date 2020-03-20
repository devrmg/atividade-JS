$(function(){


    function configurateHover(){
        $('.card-title').off('mouseenter').on('mouseenter',
            function() {
                $(this).css('color', 'yellow');
            }
        );


        $('.card-title').off('mouseleave').on('mouseleave',
            function() {
                $(this).css('color', 'black');
            }
        );
    
    }


    configurateHover()


    //BUSCA OS CARDS PELO ÍNDICE DELES

        //$(function(){
        //    $('.btn-primary').click(function(){
        //        $('.card:eq(2)').fadeToggle(6000)
        //        $('.card:eq(0)').fadeToggle(3000)
        //        $('.card:eq(1)').fadeToggle(1000)
        //    });
        //});

    $('.btn-primary').click(function(){
        $('.card-1').fadeToggle(7000)
        $('.card-2').fadeToggle(5000)
        $('.card-3').fadeToggle(3000)
    });

    $('.btn-secundary').click(function(){
        let content = $('.div-original').html();

        $('.div-original').after("<div class='row'>" + content + '</div>')

        //Com esse comando clonamos a div inteira, incluindo os comportamentos da div 
            // $('.div-original').after($('.div-original').clone(true));

        // $('.card-1').after($('.card-4').fadeIn(5000))
        // $('.card-2').after($('.card-5').fadeIn(7000))
        // $('.card-3').after($('.card-6').fadeIn(9000))

        configurateHover()
    });

    // $('h5').hover(function(){
    //     $(this).css("color", "yellow");
    //     }, function(){
    //         $(this).css("color", "black");
    //     }); 

});





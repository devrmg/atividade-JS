$(function(){


        $('#eventType').change(function(){
            let selected = $('#eventType :selected').val();
            if (selected === 'Teatro'){
                $(".teatroHide").hide();
                $(".teatroShow").show();
            } else if (selected === 'Cinema'){
                $('.cineHide').hide();
                $(".cineShow").show();
            } else if (selected === 'Debate Literário'){
                $('.debateHide').hide();
                $('.debateShow').show();
            } else if (selected === 'Dança'){
                $('.dancaHide').hide();
                $('.dancaShow').show();
            } else if (selected === 'Artes visuais e exposições'){
                $('.artesHide').hide();
                $('.artesShow').show();
            } else if (selected === 'Música') {
                $('.musicaHide').hide();
                $('.musicaShow').show();
            } else {
                $('.esconde').hide();
            }
        })


        $('#free').change(function(){

            if ($(this).prop('checked')){
                $('.price').hide();
            } else {
                $('.price').show();
            }
        })

//Código para validar campos obrigatórios 
        $('form').submit(function(e){
            let valid = true;

            if ($('#title').is(':visible') && $('#title').val() == ''){
                $('#title').css('border', '1px solid red');
                valid = false
            }

            if ($('#synopsis').is(':visible') && $('#synopsis').val() == ''){
                $('#synopsis').css('border', '1px solid red');
                valid = false
            }

//Esse preventDefault está dentro de um if para que ele só aconteça caso tenhamos os campos obrigatórios vazios. Se deixarmos fora do if
// ele irá sempre prevenir o carregamento da página.
            if (valid == false){
                e.preventDefault();
            }
        });
});

//Resolução com SWITCH CASE
//$(function(){


//   $('#eventType').change(function(){
//     let selected = $('#eventType :selected').val();
//     $('.esconde').show();
//     switch(selected){
//          case 'Teatro':
//               $('.teatroHide').hide();
//                $('.teatroShow').show();
//                break;
//            case 'Cinema' :
//                $('.cineHide').hide();
//                $('.cineShow').show();
//                break;
//            case ... até o case padrão
//
//            default :
//                $('.esconde').hide();
//      }
//});
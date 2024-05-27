$(document).ready(function(){
    console.log($('form button'))
   $('#telephone').mask('(00)00000-0000');
   $('#cpf').mask('000.000.000-00');
   $('#cep').mask('00000-000');

})

$('form').on('submit',function(e){
    e.preventDefault();
    $('input').val('');
})
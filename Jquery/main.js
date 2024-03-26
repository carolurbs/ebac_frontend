$(document).ready(function(){
    console.log($('form button'))
})

$('form').on('submit',function(e){
    e.preventDefaut();
})

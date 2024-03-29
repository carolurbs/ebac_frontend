$(document).ready(function(){
    console.log($('form button'))
   
})

$('form').on('submit',function(e){
    e.preventDefault();
    const newTask = $('#task').val();
    const newItem = $('<li></li>').text(newTask);
   $('ul').append(newItem);
   newItem.on('click', function(){
   
       $(this).toggleClass('completed'); 
   
   
   })
})
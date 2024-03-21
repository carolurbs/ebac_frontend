const form=document.getElementById ('calculadora')
var numero1 = document.getElementById('campoA');
var numero2 = document.getElementById('campoB');
document.getElementById('success').style.display = 'none';
document.getElementById('failure').style.display = 'none';
form.addEventListener('submit',function(e) {
e.preventDefault();
if(numero2.value > numero1.value)
{
    document.getElementById('success').style.display = 'inline'
    numero1.value="";
    numero2.value="";
}
else
{
    document.getElementById('failure').style.display = 'inline'
}
})
document.addEventListener('DOMContentLoaded',function(){

document.getElementById('form-sorteador').addEventListener('submit',function(e){
    e.preventDefault();
    let maxNumber= document.getElementById('max-number').value;
    maxNumber= parseInt(maxNumber);
    let randomNumber = Math.random() * maxNumber;
    randomNumber= Math.floor(randomNumber)+1;
    document.getElementById('diceResult').innerText=randomNumber;
    document.querySelector('.result').style.display = 'block';
})


})
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let formReceived = document.getElementById('form');

let nameGood = document.getElementById('nameCheck');
let emailGood = document.getElementById('emailCheck');
let passGood = document.getElementById('passCheck');

formReceived.addEventListener("keyup", nameCheck);

function nameCheck(){
    
    if(password.value.length > 7 && password.value.length < 20){
        passGood.src = "https://www.directfundingnow.com/wp-content/uploads/2015/11/GREEN-CIRCLE-WITH-CHECK-MARK.png"
    
    };
}

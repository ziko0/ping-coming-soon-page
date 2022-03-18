const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
        text.innerHTML = 'Subscribed!';
        text.style = 'color: green; font-size: 18px; font-family: Libre Franklin; border-color: green';
    }else{
      email.style = 'border-color: red';
      text.style = 'color: red; margin-right: 19rem; font-size: 11px ' ; 
      text.innerText="Pleas enter valide email";
    }
})
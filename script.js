document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phonenumber = document.getElementById('phonenumber');
        //Ensure all fields are filled before submitting 
        console.log("test",name);
        if (name.value === ''){
            const error = document.querySelector('.error-text-name');  
            error.style.display = "block"
        }
        if (email.value === ''){
            const error = document.querySelector('.error-text-email');
            error.style.display = "block"
        }
        if (phonenumber.value === ''){
            const error = document.querySelector('.error-text-phone');
            error.style.display = "block";
        }
        name.addEventListener('focus', ()=> {
            const errName = document.querySelector('.error-text-name');
            errName.style.display = "none";
        });
        email.addEventListener('keypress', () => {
            const errEmail = document.querySelector('.error-text-name');
            errEmail.style.display = "none";
        });
        phonenumber.addEventListener('keypress',() => {
            const errPhone = document.querySelector('.error-text-name');
            errPhone.style.display = "none";
        });
    });
});
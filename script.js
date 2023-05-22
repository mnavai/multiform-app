document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phonenumber = document.getElementById('phonenumber');
        //Ensure all fields are filled before submitting 
        
        if (name.value === ''){
            const error = document.querySelector('.error-text-name');  
            error.style.display = "block";
            name.classList.add('error-border');
        }
        if (email.value === ''){
            const error = document.querySelector('.error-text-email');
            error.style.display = "block"
            email.classList.add('error-border');
        }
        if (phonenumber.value === ''){
            const error = document.querySelector('.error-text-phone');
            error.style.display = "block";
            phonenumber.classList.add('error-border');
        }

        //clear the error message on focus
        name.addEventListener('focus', ()=> {
            const errName = document.querySelector('.error-text-name');
            errName.style.display = "none";
            name.classList.remove('error-border');
        });
        email.addEventListener('focus', () => {
            const errEmail = document.querySelector('.error-text-email');
            errEmail.style.display = "none";
            email.classList.remove('error-border');
        });
        phonenumber.addEventListener('focus',() => {
            const errPhone = document.querySelector('.error-text-phone');
            errPhone.style.display = "none";
            phonenumber.classList.remove('error-border');
        });
        //clear the form if successfully submitted
        if(name.value !== '' && email.value !== '' && phonenumber.value !== ''){
            form.reset();
            window.location.href = "secondpage.html";
        }
    });

    
});
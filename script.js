document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',validateForm);

    function validateForm(event){
        event.preventDefault();

        //Ensure all fields are filled before submitting 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;

        if (name === ''){
            const error = document.querySelector('.error-text-name');  
            error.style.display = "block"
        }
        if (email === ''){
            const error = document.querySelector('.error-text-email');
            error.style.display = "block"
        }
        if (phonenumber === ''){
            const error = document.querySelector('.error-text-phone');
            error.style.display = "block"
            return;
        }
        form.submit()
    }
});
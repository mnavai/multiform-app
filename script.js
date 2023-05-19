document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',validateForm);

    function validateForm(event){
        event.preventDefault();

        //Ensure all fields are filled before submitting 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;

        if (name === '' || email === '' || phonenumber === ''){
            const error = document.querySelector('.error-text');
            error.style.display = "block"
            return;
        }
        form.submit()
    }
});
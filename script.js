document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',validateForm);

    function validateForm(event){
        event.preventDefault();

        //Ensure all fields are filled before submitting the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;

        if (name === '' || email === '' || phonenumber === ''){
            alert("This field is required");
            return;
        }

        form.submit()
    }
});
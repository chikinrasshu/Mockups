(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    console.log(forms);

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            console.log("Checking validity");
            if (!form.checkValidity()) {
                console.log("Is valid?");
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false)
    })
})()
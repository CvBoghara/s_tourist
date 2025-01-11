(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  const navbarCollapse = document.getElementById('navbarNavAltMarkup');
navbarCollapse.addEventListener('show.bs.collapse', () => {
  navbarCollapse.style.height = '200px';
});
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  navbarCollapse.style.height = ''; // Reset to default
});

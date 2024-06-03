function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', function() {

  var forms = document.getElementsByClassName('needs-validation');

  var validation = Array.prototype.filter.call(forms, function(form) { // Foi uma forma mais simples de fazer a validação do que for each, por eu estar usando Bootstrap
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          } else {
              event.preventDefault();
              alert('Enviado com sucesso!');
          }
          form.classList.add('was-validated');
      }, false);
  });
});



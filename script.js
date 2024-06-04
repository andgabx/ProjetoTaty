function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'pt-BR', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', function() {
  var forms = document.getElementsByClassName('needs-validation');

  Array.prototype.filter.call(forms, function(form) {
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




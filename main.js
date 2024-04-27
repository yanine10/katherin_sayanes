function muestra_oculta(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === 'none') {
        elemento.style.display = 'flex';  
    } else {
        elemento.style.display = 'none';
    }
}

function enviarMail() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var itemDescription = document.getElementById('itemDescription').value;
    var estimatedValue = document.getElementById('estimatedValue').value;
  
    var mailtoLink = 'mailto:agustingondu@gmail.com' +
                     '?subject=' + encodeURIComponent('Nueva Donación de Lote') +
                     '&body=' + encodeURIComponent('Nombres y Apellidos: ' + fullName + '\n') +
                               encodeURIComponent('Correo Electrónico: ' + email + '\n') +
                               encodeURIComponent('Descripción del Lote: ' + itemDescription + '\n') +
                               encodeURIComponent('Valor Estimado: ' + estimatedValue);
  
    window.location.href = mailtoLink;
}

function redirectToPayPal() {
    window.open('https://www.paypal.com/uy/home', '_blank');
}

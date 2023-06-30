const toast = document.getElementById('toast');
const closeBtn = document.getElementById('close-toast');

// Adiciona um event listener ao botão close-toast
closeBtn.addEventListener('click', function() {
    // Altera o estilo do elemento toast para display:none
    toast.style.display = 'none';
    toast.style.opacity = '0';

});
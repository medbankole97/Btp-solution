// menu barre responsive
var small_menu = document.querySelector('.toggle_menu')
var menu = document.querySelector('.nav-links')

small_menu.onclick = function(){
     small_menu.classList.toggle('active');
     menu.classList.toggle('responsive');
}

// validité des champs input
document.getElementById('contactForm').addEventListener('submit', function(event) {
     let nom = document.getElementById('nom');
     let regexNom = /^[a-zA-Z\s]+$/;
     let erreurNom = document.getElementById('errorName');
     let valide = true;

     if (!regexNom.test(nom.value)) {
         erreurNom.innerHTML = 'votre nom est invalide';
         valide = false;
     } else {
         erreurNom.innerHTML = '';
     }
     if (!valide) {
         event.preventDefault();
     }
 });
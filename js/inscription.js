function validation(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    // Récupération des valeurs saisies dans les champs
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpassword = document.getElementById("confpassword").value;

    // Vérification du format de l'adresse e-mail
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!regexEmail.test(email)) {
        alert("Veuillez saisir une adresse e-mail valide.");
        return;
    }
    // Expression régulière pour vérifier le format du mot de passe
    var regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password)) {
        alert("Le mot de passe doit comporter au moins 8 caractères, une lettre majuscule, un chiffre et un caractère spécial. ")
        return;
    }
    // Vérification du mot de passe et de sa confirmation
    if (password !== confpassword) {
        alert("La confirmation du mot de passe ne correspond pas.");
        return;
    }
    // Vérification des autres champs
    if (nom === "" || prenom === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
    } else {
        // Si tous les champs sont valides, soumettre le formulaire
        document.getElementById("form").submit();
    }
    // Écouteur d'événement pour le formulaire
    document.getElementById("form").addEventListener("submit", validation);
}

function retourPrecedent() {
    window.history.back();
}
function allerJeu(){
    window.location.href="../jeu.html";
}
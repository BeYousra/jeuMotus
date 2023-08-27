// Fonction de validation du formulaire de connexion
function validationConnex(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération des valeurs saisies dans les champs
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Liste des utilisateurs déjà inscrits (exemples)
    var utilisateursInscrits = [
        { email: "utilisateur1@gmail.com", password: "Motdepasse&1" },
        { email: "utilisateur2@yahoo.fr", password: "Motdepasse&2" },
        // Ajoutez d'autres utilisateurs si nécessaire
    ];

    // Vérification des informations de connexion
    var utilisateurTrouve = utilisateursInscrits.find(function (utilisateur) {
        return utilisateur.email === email && utilisateur.password === password;
    });

    if (utilisateurTrouve) {
        alert("Connexion réussie !");
        window.location.href="../motus.html"; 
        // Vous pouvez rediriger l'utilisateur vers une autre page ici
    } else {
        alert("Identifiant ou mot de passe incorrect.");
    }
}
// Écouteur d'événement pour le formulaire de connexion
document.getElementById("monFormulaire").addEventListener("submit", validerConnexion);
function retourPrecedent() {
    window.history.back();
}
function allerJeu(){
    window.location.href="../jeu.html";
}
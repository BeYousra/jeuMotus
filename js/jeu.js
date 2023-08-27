// Fonction de validation des champs d'entrée
function validerChampsMaj(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération des valeurs saisies dans les champs d'entrée
    var champ2 = document.getElementById("2").value;
    var champ3 = document.getElementById("3").value;
    var champ4 = document.getElementById("4").value;
    var champ5 = document.getElementById("5").value;
    var champ6 = document.getElementById("6").value;
    var champ7 = document.getElementById("7").value;
    var champ8 = document.getElementById("8").value;
    var champ9 = document.getElementById("9").value;
    var champ10 = document.getElementById("10").value;
    var champ11 = document.getElementById("11").value;
    var champ12 = document.getElementById("12").value;
    var champ13 = document.getElementById("13").value;
    var champ14 = document.getElementById("14").value;
    var champ15 = document.getElementById("15").value;
    var champ16 = document.getElementById("16").value;
    var champ17 = document.getElementById("17").value;
    var champ18 = document.getElementById("18").value;
    var champ19 = document.getElementById("19").value;
    var champ20 = document.getElementById("20").value;
    var champ21 = document.getElementById("21").value;
    var champ22 = document.getElementById("22").value;
    var champ23 = document.getElementById("23").value;
    var champ24 = document.getElementById("24").value;
    var champ25 = document.getElementById("25").value;
    var champ26 = document.getElementById("26").value;
    var champ27 = document.getElementById("27").value;
    var champ28 = document.getElementById("28").value;
    var champ29 = document.getElementById("29").value;
    var champ30 = document.getElementById("30").value;
    var champ31 = document.getElementById("31").value;
    var champ32 = document.getElementById("32").value;
    var champ33 = document.getElementById("33").value;
    var champ34 = document.getElementById("34").value;
    var champ35 = document.getElementById("35").value;
    var champ36 = document.getElementById("36").value;

    // Expression régulière pour vérifier si chaque champ est une majuscule
    var regexMaj = /^[A-Z]$/;

    // Vérification du format pour chaque champ d'entrée
    if ( !regexMaj.test(champ2) || !regexMaj.test(champ3) || !regexMaj.test(champ4) || !regexMaj.test(champ5) || !regexMaj.test(champ6) || !regexMaj.test(champ7) || !regexMaj.test(champ8) || 
    !regexMaj.test(champ9) || !regexMaj.test(champ10) || !regexMaj.test(champ11) || !regexMaj.test(champ12) || !regexMaj.test(champ13) || !regexMaj.test(champ14) || !regexMaj.test(champ15) || !regexMaj.test(champ16) || 
    !regexMaj.test(champ17) || !regexMaj.test(champ18) || !regexMaj.test(champ19) || !regexMaj.test(champ20) || !regexMaj.test(champ21) || !regexMaj.test(champ22) || !regexMaj.test(champ23) || !regexMaj.test(champ24) || 
    !regexMaj.test(champ25) || !regexMaj.test(champ26) || !regexMaj.test(champ27) || !regexMaj.test(champ28) || !regexMaj.test(champ29) || !regexMaj.test(champ30) || !regexMaj.test(champ31) || !regexMaj.test(champ32) || 
    !regexMaj.test(champ33) || !regexMaj.test(champ34) || !regexMaj.test(champ35) || !regexMaj.test(champ36)) {
        alert("Veuillez saisir une seule lettre majuscule dans chaque champ.");
    } else {
        alert("Champs valides : " + champ1 + ", " + champ2 + ", " + champ3 +  "," +champ4+ "," +champ5+ "," +champ6+ "," +champ7+ "," +champ8+ "," +champ9+ "," 
        +champ10+ "," +champ11+ "," +champ12+ "," +champ13+ "," +champ14+ "," +champ15+ "," +champ16+ "," +champ17+ "," +champ18+ "," +champ19+ "," +champ20+ "," 
        +champ21+ "," +champ22+ "," +champ23+ "," +champ24+ "," +champ25+ "," +champ26+ "," +champ27+ "," +champ28+ "," +champ30+ "," +champ31+ "," +champ32+ "," 
        +champ33+ "," +champ34+ "," +champ35+ "," +champ36) ;
    }
    
    // Vérifier si l'utilisateur est authentifié, sinon le rediriger vers la page de connexion
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.replace('connexion.html');
    }
}
var dictionary_6 = ["ABACAS", "ABAQUE", "ABASIE", "ABATEE", "ABATIS", "ABATTE", "ABATTU", "ABBAYE", "ABCEDA"];
var inputsLigne1 = document.querySelectorAll("#1, #2, #3, #4, #5, #6");
var inputsLigne2 = document.querySelectorAll("#7, #8, #9, #10, #11, #12");
var inputsLigne3 = document.querySelectorAll("#13, #14, #15, #16, #17, #18");
var inputsLigne4 = document.querySelectorAll("#19, #20, #21, #22, #23, #24");
var inputsLigne5 = document.querySelectorAll("#25, #26, #27, #28, #29, #30");
var inputsLigne6 = document.querySelectorAll("#31, #32, #33, #34, #35, #36");

inputsLigne1.forEach(function(input){
    input.addEventListener("input", verif)
})

// Grille 6x6
var grille = [
    ['A', 'B', 'A', 'C', 'A', 'S'],['A', 'B', 'A', 'Q', 'U', 'E'],['A', 'B', 'A', 'S', 'I', 'E'],
    ['A', 'B', 'A', 'T', 'E', 'E'],['A', 'B', 'A', 'T', 'I', 'S'],['A', 'B', 'A', 'T', 'T', 'E'],
    ['A', 'B', 'A', 'T', 'T', 'U'],['A', 'B', 'B', 'A', 'Y', 'E'],['A', 'B', 'C', 'E', 'D', 'A'],
];

// Écouteur d'événement pour le formulaire
document.querySelector("form").addEventListener("submit", validerChampsMaj);


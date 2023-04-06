
function Validation(){
    if($("#user").checked()=== true || $("#admin").checked()=== true){

            $("#validation").css(background-image, url("check.jpg\"")).css(background-size, contain);
            $("#validation").css(background-position, right-top).css(background-repeat, no-repeat);
            return true;
        }

}

function AfficherCheck(){
    $("#validation").css(background-image, url("check.jpg\""))
    return true;
}

function Connexion() {
    //mettre les valeurs du formulaire dans des variables
    let username = $("#username").val();
    let password = $("#password").val();
    let type = $("#user").val(); //todo à revoir si je dois plutôt utiliser un id
   /* let type2 = document.getElementsByName(name);
    let type3 = $([name=type]).val(); //todo à revoir si je dois plutôt utiliser un id
    let type4 = document.getElementsByName(name).values();*/


    let theme = $("#theme").val();
    let cle = $("#cle").val();

    //si type est user on met action user-compte pour que ça aille vers une autre page
    if ($("#user" === "checked")) {
        $("#formConnexion").attr("action", "User-compte.html");//vérifier le sélecteur
    }
    if ($("#admin" === "checked")) {
        $("#formConnexion").attr("action", "Admin-GestionUtilisateurs.html");//vérifier le sélecteur
    }

    //aller chercher le nom du user sur le localstorage
    let CompteConnecte =  JSON.parse(localStorage.getItem('CompteConnecte',));

    //si le nom n'existait pas dans le localstorage, on le rempli avec une chaine vide
    if (CompteConnecte === null){
        CompteConnecte = [];
    }
    //remplis la variable avec le username
    CompteConnecte.username = username;
    CompteConnecte.type = type;

//enregistrer dans le localStorage
    localStorage.setItem('Compte', JSON.stringify(CompteConnecte));


    //pour la validation : https://getbootstrap.com/docs/5.3/forms/validation/
// Example starter JavaScript for disabling form submissions if there are invalid fields
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
    })()
}


$(document).ready(function () {





})

//todo: Nettoyer le code supprimer
//todo: rendre responsive cellulaire
//todo: rendre responsive tablette
//todo: mettre validation html
//todo: mettre validation css

/*
https://www.delftstack.com/fr/howto/javascript/javascript-form-submit/#:~:text=Obtenir%20les%20valeurs%20des%20champs%20de%20formulaire%20en,pour%20r%C3%A9cup%C3%A9rer%20les%20valeurs%20stock%C3%A9es%20dans%20ce%20champ.
// Function to check that the input field is not empty while submitting
function requireValue(input) {
    return !(input.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
    requiredFields.forEach((input) => {
        valid = valid|requireValue(input.input);
    });
    if (!valid) {
        event.preventDefault();
    }
});*/

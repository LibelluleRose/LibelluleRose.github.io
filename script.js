/*Fonction qui valide les champs de text et return true si tout les champs sont correct*/
function Validation() {

    if ($("#user").checked() === true || $("#admin").checked() === true) {

        $("#validation").css(background - image, url("check.jpg\"")).css(background - size, contain);
        $("#validation").css(background - position, right - top).css(background - repeat, no - repeat);
        return true;
    }

}

/*/!*Fonction qui vérifie si *!/
function AfficherCheck(){
    $("#validation").css(background-image, url("check.jpg\""))
    return true;
}*/

/**/
$("#btn-connexion").click(function Connexion() {
})

function Connexion() {

    //mettre les valeurs du formulaire dans des variables
    let username = $("#username").val();
    let password = $("#password").val();
    let type = $("#user").val();
    /* let type2 = document.getElementsByName(name);
     let type3 = $([name=type]).val();
     let type4 = document.getElementsByName(name).values();*/

    let theme = $("#theme").val();
    let cle = $("#cle").val();

    const user = new Utilisateur(username, password, type, theme, cle);

    localStorage.setItem("ObjUser", user);

    localStorage.setItem("UsernameAafficher", username);

    /*  //si type est user on met action user-compte pour que ça aille vers une autre page
      if ($("#user" === "checked")) {
         // $("#formConnexion").attr("action", "User-compte.html");//vérifier le sélecteur
          document.setAttribute("action","User-compte.html");
      }
      if ($("#admin" === "checked")) {
        //  $("#formConnexion").attr("action", "Admin-GestionUtilisateurs.html");//vérifier le sélecteur
          document.setAttribute("action","Admin-GestionUtilisateurs.html");
      }*/

    //aller chercher le nom du user sur le localstorage
    //let CompteConnecte =  JSON.parse(localStorage.getItem('CompteConnecte',));
    /*    let UsernameAafficher = localStorage.getItem('CompteConnecte');
        //si le nom n'existait pas dans le localstorage, on le rempli avec une chaine vide
        if (CompteConnecte === null){
            //CompteConnecte = [];
            CompteConnecte = username;
        }*/
    //remplis la variable avec le username
    //   CompteConnecte.username = username;
    // CompteConnecte.type = type;


//enregistrer dans le localStorage
    //  localStorage.setItem('Compte', JSON.stringify(CompteConnecte));
    // localStorage.setItem('CompteConnecte', username);


}

//Fonction qui vérifie si le user existe ds mokapi para l'utilisateur à chercher return true or false

/*function Exist(user) {
    //aller chercher la liste des utilisateur
    $("#btn-connexion").click(function () {

        const userExist = $.getJSON('https://642729f8161067a83bf6c6ac.mockapi.io/user/' + $("#id").val())
            .done(function (utilisateur) {


            });
    });

    if (user === userExist){

    }

}*/


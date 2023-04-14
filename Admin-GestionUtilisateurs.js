/*Pour aller chercher les données sur Mokapi : https://642729f8161067a83bf6c6ac.mockapi.io/user*/


//Pour ajouter un user   Objet Utilisateur

class Utilisateur {

    constructor(username, password, type, theme, cle) {
        this.username = username;
        this.password = password;
        this.type = type;
        this.theme = theme;
        this.cle = cle;
    }
}

//fonction qui affiche le nom du user dans la nav. aucun retour
function AfficherUsername() {
    //aller chercher le nom du user sur le localstorage
    let afficherUsername = localStorage.getItem('UsernameAafficher'); //todo ne fonctionne pas à revoir

    //Afficher le nom dans le nav
    $("#NavNomCompte").replaceWith("Bienvenue " + afficherUsername + " !");
}

//////////////////////////////////////////////////////////////////

$(document).ready(function () {

    AfficherUsername();
})


////////////////////////////////////////////////////////////////
//  AJOUTER   //////////////////
/////////////////////////////

//Fonction qui valide que les pwd sont pareil et prend en param si ajouter = true ou false = modifier. return true = pareil ou false = différent
function ValidationAjouter(ajouter) {
    let pwd;
    let pwdConfirm;

    if (ajouter === true)  //true pour ajouter
    {
        pwd = $("#ajouter-password").val();
        pwdConfirm = $("#ajouter-confirmer-password").val();

    } else (ajouter === false)  //false pour modifier
    {
        pwd = $("#modifier-password").val();
        pwdConfirm = $("#modifier-confirmer-password").val();
    }

    if (pwd === pwdConfirm) {
        return true
    } else return false


}

//Fonction qui ajoute un objet utilisateur à mokapi. aucun return
function Ajouter() {

    //faire la validation du formulaire
    if (ValidationAjouter(true) === true) {
        //Va chercher les valeurs et créer un nouvel objet utilisateur avec
        let username = $("#ajouter-username").val();
        let password = $("#ajouter-password").val();
        let type = $("[name=type]").val();
        let theme = $("[name=theme]").val();
        let cle = $("#ajouter-cle").val();

        //créer l'obj Utilisateur
        const NouvelUtilisateur = new Utilisateur(username, password, type, theme, cle)


        //Envoie l'obj au serveur en passant par ajax
        $.ajax('https://642729f8161067a83bf6c6ac.mockapi.io/user', {
            data: JSON.stringify(NouvelUtilisateur),
            contentType: 'application/json',
            type: 'POST'
        }).catch(error => {
            console.log(error.message); //Afficher les messages d'erreurs du serveur dans la console.
        });
        event.preventDefault();

        alert("L'utilisateur a été créé.")

    } else //si la validation est false
    {
        alert("Les deux mots de passe ne correspondent pas.")
    }

}

////////////////////////////////////////////////////////////////
//  MODIFIER//////////////////
/////////////////////////////

//aller chercher donnée sur le serveur pour remplir le formulaire

$("#btn-rechercherModifier").click(function () {

    $.getJSON('https://642729f8161067a83bf6c6ac.mockapi.io/user/' + $("#mod-rech-id").val())
        .done(function (utilisateur) {

            $("#modifier-username").val(utilisateur.username);
            $("#modifier-password").val(utilisateur.password);
            $("#modifier-confirmer-password").val(utilisateur.password);
            $("#modifier-cle").val(utilisateur.cle);

        });
});

//Fonction qui modifie les donées du serveurs
function Modifier() {
//valider que le pwd et la confirmation du pwd sont pareil.
    if (ValidationAjouter(false) === true) { //false pour dire que ce n'est pas ajouter.
        alert("L'utilisateur à été modifier");
    }

//modifie dans mokapi
    fetch('https://642729f8161067a83bf6c6ac.mockapi.io/user/' + $("#mod-rech-id").val(), {
        method: 'PUT', // or PATCH
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            "username": $("#modifier-username").val(), "password": $("#modifier-password").val(),
            "type": $("[name=type-mod]").val(), "theme": $("[name=theme-mod]").val(), "cle": $("#modifier-cle").val()
        })

    })
//fermer la fenetre
    $("#Modifier-Modal").modal('hide');


    //vider les champs
    $("#mod-rech-id").val("");
}

////////////////////////////////////////////////////////////////
//  SUPPRIMER//////////////////
/////////////////////////////

//Aller chercher toute les variable et remplir le formulaire pour bien voir l'utilisateur qu'on va supprimer.

$("#btn_Supprimer-Rechercher").click(function () {
//supprimer de mokapi
    $.getJSON('https://642729f8161067a83bf6c6ac.mockapi.io/user/' + $("#idRechercheSupprimer").val())
        .done(function (utilisateur) {
            //les rentrer dans le code html
            $("#supprimer-username").val(utilisateur.username); //comment aller chercher le username dans l'objet
            $("#supprimer-password").val(utilisateur.password);
            $("#supprimer-cle").val(utilisateur.cle);
        });
});

//Confirmer la suppression avant la suppression

//clic oui
$("#btnSupprimerOui").click(function () {
    //Supprimer le user ak le username

    fetch('https://642729f8161067a83bf6c6ac.mockapi.io/user/' + $("#idRechercheSupprimer").val(), {
        method: 'DELETE',
    }).then(function () {
        $("#id").remove();

    });

    FermerFenetreModalSupprimer();
    $("#idRechercheSupprimer").val("");
})

//click non
$("#btnSupprimerNon").click(function () {

    FermerFenetreModalSupprimer();
    //vider les champs
    $("#idRechercheSupprimer").val("");
})


//////////////////////////////////////

//Fonction qui ferme la fenêtre du modal
function FermerFenetreModalSupprimer() {
    $("#ModalActionSupprimer").modal('hide');
}


////////////////////////////////////////////////////////////////
//  CONSULTER  //////////////////
/////////////////////////////


//aller chercher donnée sur le serveur et afficher la liste des objets Utilisateur
$("#accordion-btn-Consulter").click(function () {
    $.getJSON('https://642729f8161067a83bf6c6ac.mockapi.io/user')
        .done(function (liste_users) {
            $.each(liste_users, function (index, user) {
                let userAfficher = new Utilisateur(user);
                $("#afficher-user-tab").append(
                    `<tr>
                        <th scope="row">${user.id}</th>
                        <td>${user.username}</td>
                        <td>${user.password}</td>
                        <td>${user.type}</td>
                        <td>${user.cle}</td>
                     </tr>`
                );
            });
        });
});

//////////////////////////////////////
/*

//Pour fermer l'accordéon
$(".accordion-collapse").onreset();*/

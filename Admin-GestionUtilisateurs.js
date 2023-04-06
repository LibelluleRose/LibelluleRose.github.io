/*Pour aller chercher les données sur Mokapi : https://642729f8161067a83bf6c6ac.mockapi.io/user*/

//aller chercher donnée sur le serveur
$("#accordion-btn-Consulter").click(function () {
    $.getJSON('https://642729f8161067a83bf6c6ac.mockapi.io/user')
        .done(function (liste_users) {
            for (let user in liste_users) {
                $("#afficher-user-tab").append(
                    ` <tr>  <th scope="row">${user.id}</th>
                            <td>${user.username}</td>
                            <td>${user.password}</td>
                            <td>${user.type}</td>
                            <td>${user.cle}</td>
                        </tr>`
                )
            }
        })
});

function AfficherUsername() {
    //aller chercher le nom du user sur le localstorage
    let afficherUsername = JSON.parse(localStorage.getItem('Compte',)); //todo ne fonctionne pas à revoir

    afficherUsername = "Bonjour toi!" //à enlever après les tests
    //Afficher le nom dans le nav
    $("#NavNomCompte").replaceWith(afficherUsername);
}

$(document).ready(function () { //todo à revoir comment faire pour que l'affichage prenne en compte le nom du username

    AfficherUsername();
})

//Envoyer une nouvelle donnée au serveur
function Ajouter(){
    $.ajax('https://642729f8161067a83bf6c6ac.mockapi.io/user', {
        data : JSON.stringify({ "username": $("#ajouter-username").val(), "password" : $("#ajouter-password").val(),
            "type": $("[name=type]").val(), "theme" : $("[name=theme]").val(),"cle": $("#ajouter-cle").val()  }),
        contentType : 'application/json',
        type : 'POST'
    }).catch(error => {
        console.log(error.message); //Afficher les messages d'erreurs du serveur dans la console.
    });
    event.preventDefault();
}



//Modifier une donnée du serveur

function Modifier(){

    fetch('https://642729f8161067a83bf6c6ac.mockapi.io/user/'+$("#username").val(), {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ "username": $("#modifier-username").val(), "password" : $("#modifier-password").val(),
            "type": $("[name=type-mod]").val(), "theme" : $("[name=theme-mod]").val(),"cle": $("#modifier-cle").val()  })
    }).then(function (){
        //update les infos
        $("#username").text($("#username").val() + ", " + $("#password").val() + ", " + $("#type").val()
            + ", " + $("#theme").val() + ", " + $("#cle").val());
    })
}

//Supprimer une donnée du serveur
function Supprimer(){
    //Supprimer le user ak le username

    fetch('https://642729f8161067a83bf6c6ac.mockapi.io/user/'+$("#username").val(), {
        method: 'DELETE',
    }).then(function (){
        $("#username").remove();
    });
}
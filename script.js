//  Création d'un tableau vide qui hébergera les prénoms des coéquipiers
var nameList = [];

//  Je récupère le boutton qui permet de valider une entrée
var getName = document.getElementById("validername");

// Je récupère le boutton qui permet de lancer le tirrage
var teamGen = document.getElementById("teamGen");


// addEventListener permet d'ajouter à notre boutton un "écouteur d'evenement",
// on lui donne une fonction qui se lancera quand l'evenement click sur celui ci sera appelé 
getName.addEventListener("click", (e)=> {
    // évite le comportement normal d'un boutton (qui recharge la page) 
    e.preventDefault();

    // Je récupère mon input texte des noms ( valeur)
    var enterName = document.getElementById("entername").value;

    // On créé une cellule dans notre table et on le relie à notre ligne au travers de son id,
    // ensuite on affiche les prénoms entrés dans ce nouveau élément 
    var newtr = document.createElement("p");
    document.getElementById("monEquipe").appendChild(newtr).innerHTML = enterName;

    // pousser la valeur dans le tableaux
    nameList.push(enterName);
});
 

// cette fonction lance le tirrage des groupes
teamGen.addEventListener("click", (e)=> {
    e.preventDefault();

    //duplication de mon tableaux pour faire le premier groupe
    var nameRest = nameList.slice(0)
    
    //creation de mon deuxieme tableau/groupe où je pousse les noms 
    var namePush = [];

    // cette boucle permet de répéter une action tant que not condition n'est pas validée
    // ici la condition est tant qu'il y a plus d'éléments dans nameRest que dans namePush 
    while (namePush.length<nameRest.length) 
        {
        // Selection d'un nombre aleatoire entre 0 et le nombre de personne entré dans la liste
        var random =  Math.floor(Math.random()*nameRest.length)
        // On le retire de la liste nameRest    
        var selected = nameRest.splice(random,1)[0]
   
        // Et on l'ajoute à la nouvelle
        namePush.push(selected)
    }


    displayGroups(nameRest, namePush)
});

// fonction qui affiche nos deux tableaux une fois générés
function displayGroups(nameRest, namePush) {
        // afficher nos deux tableaux 
        var newGroupe1 = document.createElement("p");
        document.getElementById("groupe1").appendChild(newGroupe1).innerHTML = nameRest;
        var newGroupe2 = document.createElement("p");
        document.getElementById("groupe2").appendChild(newGroupe2).innerHTML = namePush;
        console.log(nameList)
}

    // Fonction pour vider les tableaux dans notre affichage
    myResetTable.addEventListener("click", (e)=> {
        e.preventDefault();

        document.getElementById("allGroup").innerHTML = "";
        document.getElementById("groupe1").innerHTML = "";
        document.getElementById("groupe2").innerHTML = "";
    });

    // celle ci pour vider la liste d'initialisation de tous les noms
    myResetParticipants.addEventListener("click", (e)=> {
    e.preventDefault();

    document.getElementById("monEquipe").innerHTML = "";
    });
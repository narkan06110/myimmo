//var pseudoAide = document.getElementById("");
var formElt = document.getElementById("sub-form");
var pseudoAide = document.createElement("p");
pseudoAide.textContent = "Pseudo doit avoir entre 6 et 12 lettres ou 6 à 12 letrres et 2 chiffres";
pseudoAide.style.color = "red";
pseudoAide.style.margin = "10px";

formElt.addEventListener("submit", function (e) {

    e.preventDefault();


    var pseudo = formElt.elements.pseudo.value;
    var mdp = formElt.elements.pwd.value;
    var regexPseudoNan = /^[a-zA-Z0-9_-]{6,12}$/;
    var regexMdp = /^[a-zA-Z0-9_-]{6,12}$/

    if ((!regexPseudoNan.test(pseudo))) {
        alert("Pseudo Erreur");
    }
    if ((regexMdp.test(mdp) != regexPseudoNan.test(pseudo))) {
        alert("Mdp Erreur");
        console.log(regexMdp.test(mdp))
    }
    if(regexPseudoNan.test(pseudo) == true && (regexMdp.test(mdp) == true))
    document.getElementById("connexionForm").addEventListener("click", function (e) {
        document.location.href = "accueil.html";
        })
    

})


   
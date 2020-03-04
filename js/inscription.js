function regmaster() {
    // regexp var
        var regextel = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/;
        var regexmail =/^([a-z])([a-z0-9])+(.|-)?([a-z0-9]+)@([a-z0-9]{2,}).([a-z]{2,4})$/;
        var regexmdp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!$@%_])([-+!$@%_\w]{8,15})$/;
        var regexpseudo =/^([a-zA-Z0-9-_]{2,36})$/;
    
    // form var
        var pseudo= document.forms["veriform"]["pseudo"].value;
        var mdp= document.forms["veriform"]["mdp"].value;
        var mail= document.forms["veriform"]["mail"].value;
        var tel= document.forms["veriform"]["tel"].value;

    // regexp result test
        var phoneResult = regextel.test(tel);
        var mailResult = regexmail.test(mail);
        var pseudoResult = regexpseudo.test(pseudo);
        var mdpResult = regexmdp.test(mdp);

        if ((phoneResult == false) ||
            (mailResult == false) ||
            (pseudoResult == false) ||
            (mdpResult == false)){
                alert("Un champs de saisi est faux")
                console.log(phoneResult);
                console.log(mailResult);
                console.log(pseudoResult);
                console.log(mdpResult);
                return false;
            }
}

function advicestyle() {
    var nom = document.getElementById("name");
    if (nom.value == "") {
        document.getElementById("legendname").style.display = "block"
    }
}
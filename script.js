document.getElementById("okButton").addEventListener("click", function() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    //« OK » si le login est « medecom » et le mot de passe est « Medecom2024 »
    if(login === "medecom" && password === "Medecom2024") {
        alert("OK");
    } 
    //« NOK » sinon
    else {
        alert("NOK");
    }
});
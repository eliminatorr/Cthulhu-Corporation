function stisk() {
    "use strict";
    var gumb = document.getElementById("gumb");
    gumb.innerHTML = "\u0161" + "e";
    
    var value = parseInt(document.getElementById("tekst").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('tekst').value = value;
    document.getElementById('tekst').innerHTML = value;
    
    if (value == 10) {
        document.getElementById('tekst').innerHTML = "uf";
        gumb.innerHTML = "\u0161" + "e enkrat";
    }
}

function stiskslika() {
    "use strict";
    alert("bravo");
}


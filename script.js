function Szerkesztheto(){
    var a = document.getElementById("aoldal").value;
    var b = document.getElementById("boldal").value;
    var c = document.getElementById("coldal").value;

    if (a+b>c||c+b>a||c+a>b){
        alert("A derékszögű háromszög megszerkeszthető!")
    }
    
    else{
        alert("A derékszögű háromszög NEM szerkeszthető meg!")
    }
}

function Random(){
    document.getElementById("aoldal").innerHTML=Math.round((Math.random() * 91) + 10);
    document.getElementById("boldal").innerHTML=Math.round((Math.random() * 91) + 10);
    document.getElementById("coldal").innerHTML=Math.round((Math.random() * 91) + 10);
}

function Atfogo(){
    var egyikbefogo = document.getElementById("aoldal").value;
    var masikbefogo = document.getElementById("boldal").value;
    var atfogo = Number(Math.sqrt(Math.pow(egyikbefogo,2)+Math.pow(masikbefogo,2)).toFixed(3));
    document.getElementById("coldal").value=atfogo
}
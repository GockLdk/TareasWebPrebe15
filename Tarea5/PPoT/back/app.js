while(true)
{
var userChoice = prompt("Escoge piedra, papel o tijeras");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "piedra";
} else if(computerChoice <= 0.67) {
    computerChoice = "papel";
} else if(computerChoice <=1){
    computerChoice = "tijeras";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    alert("Pense que te la rifarias mejor...Empataron");
}
if(choice1 === "piedra") {
    if(choice2 === "tijeras") {
        alert("piedra aplasto a tijeras");
    } else {
        alert("El papel se la rifo contra tu piedra");
    }
}
if(choice1 === "papel") {
    if(choice2 === "piedra") {
        alert("Papel es el rey contra las piedras");
    } else {
        if(choice2 === "tijeras") {
            alert("Tu papel fue destrozado contra las superpoderosas tijeras :v");
    }
}
}
if(choice1 === "tijeras") {
    if(choice2 === "piedra") {
        alert("Las tijeras se la sorbieron a la piedra");
    } else {
        if(choice2 === "papel") {
            alert("Tus tijeras hicieron origami a el papel :v");
        }
    }
}
}
console.log(compare(userChoice, computerChoice));
}
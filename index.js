// cibler l'écran et faire son opération
let screen = document.querySelector('#valeur'); 
let num = document.querySelector("#bouton");
num.addEventListener('click',(e) =>
{
    let nb = e.target.value;
    console.log(nb);
    screen.textContent += nb;
});

// Récupérer l'opération et évaluer résultat avec => eval()
function resultat()
{ 
    let take = screen.innerHTML; // récupérer
    let resu = eval(take)
    screen.textContent = resu;
    console.log("Votre opération est: ",take);
    console.log("Le résultat est: ", resu);
};

// Vider écran
let init = document.querySelector("#C"); 
init.addEventListener('click',(e) =>
{
    screen.textContent = "";
    console.clear();
});

// Fonction précédent avec Backspace 
function prev()
{ 
    let take= screen.innerHTML;
    let prev = take.substring(0, take.length - 1);
    screen.textContent = prev;
};

// Keypress pour clavier
const   clavier = document.querySelector("body");
clavier.addEventListener("keypress", (e) => 
    {
        if (e.key === "9") {let nb = 9;screen.textContent += nb;} 
        else if (e.key === "8") {let nb = 8;screen.textContent += nb;} 
        else if (e.key === "7") {let nb = 7;screen.textContent += nb;} 
        else if (e.key === "6") {let nb = 6;screen.textContent += nb;} 
        else if (e.key === "5") {let nb = 5;screen.textContent += nb;} 
        else if (e.key === "4") {let nb = 4;screen.textContent += nb;} 
        else if (e.key === "3") {let nb = 3;screen.textContent += nb;} 
        else if (e.key === "2") {let nb = 2;screen.textContent += nb;} 
        else if (e.key === "1") {let nb = 1;screen.textContent += nb;} 
        else if (e.key === "0") {let nb = 0;screen.textContent += nb;} 
        else if (e.key === ".") {let nb = ".";screen.textContent += nb;} 
        else if (e.key === "(") {let nb = "(";screen.textContent += nb;} 
        else if (e.key === ")") {let nb = ")";screen.textContent += nb;} 
        else if (e.key === "+") {let nb = "+";screen.textContent += nb;} 
        else if (e.key === "-") {let nb = "-";screen.textContent += nb;} 
        else if (e.key === "*") {let nb = "*";screen.textContent += nb;} 
        else if (e.key === "/") {let nb = "/";screen.textContent += nb;} 
        else if (e.key === "c") {screen.textContent = "";console.clear();} 
        else if (e.key === "Enter"){resultat();}
    });
// Keydown débug : car keypress ne fonctionne pas
clavier.addEventListener("keydown", (e) => { if (e.keyCode === 8) {prev();} });














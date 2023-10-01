let tab = [];
function losowaLiczba(min, max)
{
    return Math.floor(Math.random()*(max-min + 1)) + min;
}
let iloscLiczb = losowaLiczba(20, 20)
let wygenerowane = [];
for(let i = 0 ; i<iloscLiczb; i++)
{
    let wylosowanaLiczba = losowaLiczba(20,50)
    wygenerowane.push(wylosowanaLiczba);
}
console.log(wygenerowane)

for(let i = 0 ; i<20; i++)
{
    let wylosowanaLiczba = Math.floor(Math.random()*(max-min + 1)) + min;
    tab.push(wylosowanaLiczba);
}
let tab1 = []
for(let i = 0; i<20; i++)
{
    let liczba = prompt("Podaj liczbe:");
    tab1.push(liczba)
}
var max = Math.max(...tab1)
var min = Math.min(...tab1)
let srednia = tab1.reduce((a,b) => a+b,0)/tab1.length
let el4 = tab1[3] // pamieciozerne 
document.write(`<p> ${tab1[6]}`) // nie pamieciozerne, prawidlowe odwolanie

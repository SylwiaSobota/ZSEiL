/*const a = 5 
const b = 6
const c = 12
let suma = a+b+c
document.write("<b>Dodawanie ",a+b+c , "</b><br>")
document.write("<i>Odejmowanie ",a-b-c , "</i><br>")
document.write("Mnożenie ",a*b*c , "<br>")
document.write("Dzielenie ",a/b/c , "<br>")

alert("Mnożenie "+(a*b*c))
document.getElementById("suma").innerHTML = suma;

let dane = prompt("Podaj liczbę")
if (dane%2==0){
    document.write(`Liczba ${dane} jest parzysta`)
}
else {
    document.write("Liczba jest nie parzysta")
}*/
let a = prompt("podaj a")
let b = prompt("podaj b")
let c = prompt("podaj c")
let delta = (b*b) - 4*a*c
if(delta <0)
{
    alert("Brak")
}
else if(delta ==0)
{
    let x0 = -b/2*a
    alert("x0"+ x0)
}
else 
{
    let x1 = -b+Math.sqrt(delta)/2*a
    let x2 = -b-Math.sqrt(delta)/2*a
    alert("x1"+x1+" ,x2 "+x2)
}

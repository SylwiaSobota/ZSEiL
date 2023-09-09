/*for - uzywamy gdy wiemy ile razy cos ma sie

 wykonac
for (zmiennaPoczatek; warunek stopu; krok zmiany)
{ instrukcje do wykonania}

while - dziala dopoki jest spelniony warunek
while(warunek [a<7, bn>16, bu=9])
{
    instrukcje do wykonanie 
    krok zmiany, a++, a--, [++a, --a]
}


do .. while - najpierw wykonuje instrukcje 
pozniej sprawdza warunek
do {
    instrukcje, 
    krok zmiany
}while(warunek)*/

//zad1
/*
for(let i=0; i<(134%5); i++)//4
{
    document.write("Witaj<br>")
}

//zad2
/*let liczba;
do {
    liczba=parseInt(prompt("Podaj liczbe"))

}while(liczba!=0)
document.write("0, koniec programu")

/* = -> przypisanie wartosci 
== -> porównanie wartosci 
=== -> porównanie wartosci i typu zmiennej
*/

//zad 3
/*
let a = parseInt(prompt("Podaj liczbe a"))
let b = parseInt(prompt("Podaj liczbe b"))
let c = parseInt(prompt("Podaj liczbe c"))
let delta = (b*b) - (4*a*c)
if (delta>0)
{
    let x1= ((-1)*b+Math.sqrt(delta))/2*a
    let x2= ((-1)*b-Math.sqrt(delta))/2*a  
    document.write(`Rozwiązania to: x1 ${x1} i x2 ${x2}.`)
}
else if(delta===0)
{
    let x0 = ((-1)*b )/ 2*a 
    document.write(`Rozwiązanie x0 ${x0}`)
}
else 
{
    document.write("Brak rozwiąznia")
}


/*swich .. case - instrukcja wyboru 
switch(zmienna_do_spr)
{
    case wartosc_zmiennej:
        {
            instrukcje do wykonania
            break
        }
    case wartosc_zmiennej_2:
        {
            instrukcje2
            break
        }
    ....
    default:
        instukcje
        break
}*/
let ocena =parseInt(prompt("Podaj ocenę"))  
switch(ocena)
{
    case 1:
        document.write("niedostateczny<br>")
        break
    case 2:
        document.write("dopusczający<br>")
        break
    default:
        document.write("błędna ocena<br>")
}

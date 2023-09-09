/*
for - wykonuje instrukcje okreslona z gory 
wiadoma ilosc razy

for (zmienna_pocz; warunek_stop; krok_zmiany)
{
    instrukcje do wykonania 
}

while - dziala dopoki warunek jest spelniony
while(warunek)
{
    instrukcje do wykonania
    krok_zmiany
}

do .. while - najpierw wykonuje instrukcje 
pozniej sprawdza warunek

do {
    instrukcje do wykonania
    krok_zmiany
}while(warunek) 
switch ... case - instrukcja wyboru z okreslonego
wzorca
switch(zmienna_do_spr)
{
    case wzorzec:
        instrukcje
        break
    case wzorzec2:
        instrukcje2
        break
    . . . 
    default
        instrukcja gdy powyzsze nie pasuja
}
*/
/*
//zad 2
for (let i =1; i<=(134%5); i++)
{
    document.write("Witaj<br>")
}
//zad 3 
let liczba
do {
    liczba=parseInt(prompt("podaj liczbe"))
}while(liczba!=0)

//zad1 
let s = parseInt(prompt("podaj liczbe"))
switch(s)
{
    case 1: 
        document.write("niedostateczny<br>")
        break
    
}*/
//zad4.1 
/*
let tablica = []
for(let i = 0; i<10; i++)
{
    tablica[i] = prompt("Podaj liczbe")
}
document.write(tablica)
//zad4.2 
let tablica1 = []; 
for(let i=0; i<10;i++)
{
    let dana=prompt("Podaj liczbę:")
    tablica1.push(dana)
    
}
document.write(tablica1)
//zad4.3
let tablica2 = new Array(10)
for(let i=0; i<tablica2.length; i++)
{
    tablica2[i] = prompt("Podaj liczbe")
}
document.write(tablica2)*/
//zad5.1
let a = parseInt(prompt("Podaj a"))
let b = parseInt(prompt("Podaj b"))
let c = parseInt(prompt("Podaj c"))
if (a>0 && b>0 && c>0 )
{
    if(a+b>c && b+c>a && c+a>b)
    {
        document.write("Można utworzyć")
    }
    else{
        document.write("nie mozna utworzyc")
    }
}
else{
    document.write("Podana wartosc zero ")
}
//zad5.2
let najwiekszy = 0
if(a>b && a>c)
{
    najwiekszy=a 
    a=0
    //suma = b+c
    //if (a<suma)
}
else if(b>c && b>a)
{
    najwiekszy=b 
    b=0
}
else 
{
    najwiekszy=c 
    c=0
}
if (a<0 || b<0 || c<0)
{
    alert("niepoprawne dane")
}
if(najwiekszy<(a+b+c))
{
    alert("mozna")
}
else{
    alert("nie mozna ")
}
//zad6
//wczesniej pobrane a b c  
let p = (a+b+c)/2
let obiczenia = p*(p-a)*(p-b)*(p-c)
let heron = Math.sqrt(obiczenia)
console.log(heron)
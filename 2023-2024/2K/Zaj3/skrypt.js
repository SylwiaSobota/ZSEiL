/*for(let i = 0; i<15; i++)
{
    document.write("<p>Witaj</p>")
}

let dziel = 189%4
for (let i = 0; i<dziel; i++)
{
    document.write("<h1>Środa</h1>")
}
for (let i = 0; i<(189%4); i++)
{
    document.write("<h1>Środa</h1>")
}

for( let a = 1; a<13; a++)
{
    for (let b = 1; b<13; b++)
    {
        document.write(a*b + " ")
    }
    document.write("<br>")
}
let m = prompt("podaj: ")
for (let i = 1; i<16; i++)
{
    document.write(m*i+ "<br>")
}*/
/*
let k
do {
    k = parseInt(prompt("Podaj liczbe:"))
    alert("ok")
}while(k!=0)*/
// zad 5
let a = parseInt(prompt("Podaj a: "))
let b = parseInt(prompt("Podaj b: "))
let c = parseInt(prompt("Podaj c: "))
//sprawdzamy czy wieksze od zera 
if (a>0 && b>0 && c>0 )
{
    if(a+b>c && b+c>a && c+a>b )
    {
        document.write("można zbudować trójkąt")
    }
    else 
    {
        document.write("nie mozna zbudowac trojkata")
    }
}
else 
{
    document.write("wartosci ujemne")
}
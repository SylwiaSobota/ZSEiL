function suma(a,b)
{
    if(isNaN(a) || isNaN(b))
    {
        alert("brak liczby")
    }
    else{
    return a+b}
}
function roznica(a,b)
{
    return a-b
}
function iloczyn(a,b)
{
    return a*b
}
function iloraz(a,b)
{
    if(b!= 0)
    {
        return a/b
    }
    else 
    {
        alert("b rowne 0")
    }
}
let c = 9
let f = 12
console.log(suma(c,f))
document.write("<p>"+suma(c,f))
//zad 3
/* 
switch (znak)
{
    case '+':
        suma(a,b)
    case '/':
        if(b!=0)
        {
        
        }
}

if (znak == '+){}
else if (znak == "/")
{
    if (b!=0)
    else 
}
else 
*/
function pobierz(){
let imie = prompt("Podaj imie")
document.write(`<p> ${imie} </p>`)
}

pobierz()
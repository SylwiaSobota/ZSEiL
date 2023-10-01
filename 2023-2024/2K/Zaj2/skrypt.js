/*let a = prompt("Podaj liczbe: ")
if (a%2==0)
{ 
    alert("Podzielna przez 2")
}
else 
{
    alert("Niepodzielna przez 2")
}
if(a%2==0)
{
    if(a%3==0)
    {
        alert("liczba podzielna przez 2 i 3")
    }
    else 
    {
        alert("Liczba podzielna przez 2")
    }
}
else 
{
    alert("Liczba niepodzielna przez 2 i 3")
}

if(a%2==0 && a%3==0)
{
    alert("liczba podzielna przez 2 i 3")
}
else if(a%2!=0 && a%3==0)
{
    alert("liczba podzielna przez 3")
}
else if(a%2==0 && a%3!=0)
{
    alert("Liczba podzielna przez 2")
}
else 
{
    alert("Liczba niepodzielna przez 2 i 3")
}
if(a%6==0){
    alert("liczba podzielna przez 2 i 3")
}
else 
{
    alert("Liczba niepodzielna przez 2 i 3")
}
*/
/*
let l1 = prompt("Podaj pierwszą liczbe:")
let l2 = prompt("Podaj drugą liczbe:")
let l3 = prompt("Podaj trzecią liczbe:")
if(l1>=l2 && l1>=l3)
{
    if(l1==l2 && l1>l3)
    {
       document.write("pierwsza największa<br>") 
       document.write("pierwsza i druga sa rowne")
    }
    else if (l1==l3 && l1>l2)
    {
        document.write("pierwsza największa<br>") 
       document.write("pierwsza i trzecia sa rowne")
    }
    else 
    {
        document.write("pierwsza największa <br>") 
       document.write("druga i trzecia sa rowne")
    }
    
}
else if(l2>l3 && l2>l1)
{
   
}
else 
{
    
}*/
let a = parseInt(prompt("Podaj liczbe "))
let b = parseInt(prompt("Podaj drugą liczbę"))
let zn = prompt("Podaj znak: (+ - * /)")
let suma = a+b
if (zn == "+" )
{
    document.write(`Suma liczb ${a} i ${b} równa się ${suma}`)
}
else if (zn == '/')
{

    if (b!=0)
    {
        document.write(`dzielenie liczb wynosi ${a/b}`)
    }
}
else{
    document.write("brak")
}
switch (zn)
{
    case '+':
        document.write(`Suma liczb ${a} i ${b} równa się ${a+b}`)
        break
    case '/':
        if (b!=0)
        {
            document.write(`dzielenie liczb wynosi ${a/b}`)
        }
        else{
            document.write("dzielenie przez 0")
        }
}
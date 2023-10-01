function suma(a,b)
{
    return a+b
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
    
    if(b=='0')
    {
        return alert("Nie wolno dzielić przez 0")
    }
    else{
    return a/b
    }
}
let c = 9
let f = 'c'
//NaN - not a Number litery zwracaja prawde,liczby
// false
console.log(isNaN(c))
console.log(isNaN(f))
document.write(suma(c,f))
console.log(roznica(c,f))
console.log(iloczyn(c,f))
console.log(iloraz(c,f))
console.log(suma(c,f))

//zad3
function kalkulator (a, b, znak)
{
    if(isNaN(a) || isNaN(b))
    { return "nie podano liczb"}
    let c
    switch(znak)
    {
        case "+":
            c = a+b 
            return c
            //return a+b
        case "-":
            return a-b
        case "*":
            return a*b
        case "/":
            if(b!==0){
            return a/b}
            else{return 0}
            
    }
}
function kalkulator2 (a, b, znak)
{
    if (znak == "+")
    {
        return a+b
    }
    else if(znak == "-")
    {
        return a-b
    }
    else if (znak == "*")
    { 
        return a*b
    }
    else if (znak == "/")
    {
        if(b!==0)
        {
            return a/b
        }
    }
    else 
    {
        console.log("niepoprawny znak")
    }
}
let g = prompt("Podaj liczbę: ") 
let k = prompt("Podaj liczbę: ")
let zn = prompt("podaj znak (+, -, *, /")
console.log(kalkulator(g,k, zn))

let imie = prompt("Podaj imie")
document.write("<p> "+imie+"</p>")
document.write(`<p> ${imie} </p>`)
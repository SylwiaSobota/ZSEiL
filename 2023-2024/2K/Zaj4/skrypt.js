let a = parseInt(prompt("Podaj liczbe"))
let b = parseInt(prompt("Podaj liczbe"))
let c = parseInt(prompt("Podaj liczbe"))
let d = parseInt(prompt("Podaj liczbe"))
let e = parseInt(prompt("Podaj liczbe"))

document.write(`Suma wynosi ${a+b+c+d+e}<br>`)
document.write(`liczba a ${a} Liczba b ${b}<br>`)
function suma(a,b,c,d,e)
{
    return (a+b+c+d+e)
}
document.write(suma(a,b,c,d,e))











//a podstawa, b wykładnik
let potega = 1
for(let i = 0; i<b; i++)
{
    potega*=a
}
document.write(`potega wynosi ${potega}`)
/*
let a1 = a%4
let b1 = b%4
let c1 = c%4

if (a1<b1 && a1<c1)
{
    document.write(`wartosc a daje najmniejsza`)
}
//4 ify plus else */
function suma(a,b,c,d)
{
    return (a+b+c+d)
}
document.write(`<br>Suma podanych liczb wynosi:  ${suma(a,b,c,d)} `)

function sum1()
{
    let wynik = a+b+c+d
    document.write(`Suma wynosi: ${wynik}`)
}
sum1()
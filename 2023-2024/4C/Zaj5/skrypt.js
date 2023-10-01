let a = parseInt(prompt("Podaj a :"))
let b = parseInt(prompt("Podaj b :"))
let c = parseInt(prompt("Podaj c :"))
let d = parseInt(prompt("Podaj d :"))
/*let suma = a+b

document.write(`Pierwiastek wynosi ${Math.sqrt(suma)} <br>`)
document.write(`Potęga wynosi ${Math.pow(suma,2)} <br>`)
document.write(` Wartość bezwzgledna wynosi ${Math.abs(suma)} <br>`)
document.write(` Logarytm wynosi ${Math.log(suma)} <br>`)
*/

let wybor = parseInt(prompt('podaj liczbe od 1 do 8 aby wykonac operacje'))
switch (wybor)
{
    case 1: 
        document.write(`<h4>Suma wynosi ${(a+b+c+d)}</h4>`)
        break
    case 2:
        document.write(`<h4>Różnica wynosi ${(a-b-c-d)}</h4>`)
        break
    case 5:
        document.write(`<h4>Potęga 5 sumy wynosi ${Math.pow((a+b+c+d),7)}</h4>`)
        break 

    default:
        document.write("Nie działa")
        break
}

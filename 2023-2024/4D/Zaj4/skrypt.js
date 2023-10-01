const akapit = document.getElementById("imie")
akapit.style.color = "red"

const akapit1 = document.querySelector("#imi")
akapit1.style.color = "red"

let d1 = new Date();
document.write(d1.toLocaleString())
let a = prompt("podaj 1 liczbe:")
let b = prompt("podaj 2 liczbe:")
let c = prompt("podaj 3 liczbe:")
let d = prompt("podaj 4 liczbe:")
let e = prompt("podaj 5 liczbe:")
let f = prompt("podaj 6 liczbe:")

document.write("Maksymalna liczba z podanych "+Math.max(a,b,c,d,e,f))
document.write("<br>Minimalna liczba z podanych "+Math.min(a,b,c,d,e,f))

document.write(" <br>minimalny pierwiastek z podanych jest z liczby "+Math.min(Math.sqrt(a),Math.sqrt(b),Math.sqrt(c),Math.sqrt(d),Math.sqrt(e),Math.sqrt(f)))

document.write("<br> maksymalną potęgę daje "+Math.max(Math.pow(a,4),Math.pow(b,4), Math.pow(c,4), Math.pow(d,4), Math.pow(e,4), Math.pow(f,4)))

if (a>b && a>c)
{  
    document.write(" a największe")
}
else if (b>a && b>c)
{
    document.write(" b największe")
}
else{
    document.write(" c największe")
}

if (a>=b && a>=c)
{
    if (a==b && a>c)
    {
        document.write("a największe, a i b rowne")
    }
    else
    {
        document.write("c największe, a i b rowne")
    }
}



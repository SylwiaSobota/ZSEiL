/*let a = 5
let b = 6
let c = 12
console.log(a+b+c)
/*
alert("a + b + c ="+`${a+b+c}`)
alert("a - b - c ="+`${a-b-c}`)
alert("a * b * c ="+`${a*b*c}`)
alert("a / b / c ="+`${a/b/c}`)

let suma = a+b+c;
console.log(suma)
document.write("<p>"+suma+"</p>")
let p = document.getElementById('suma')
p.innerHTML = a+b+c
//getElementByClass */
/*
let a = parseInt(prompt("podaj liczbe"));
if (a%2== 0)
{
    document.write("Liczba "+ a + " jest parzysta")
}
else{
    document.write("Liczba "+ a + " nie jest parzysta")
}
*/
//na funkcji nasłuchujące 
const btn = document.querySelector("button")
const ipt = document.querySelector("input")
btn.addEventListener("click", ()=>{
    const p = document.createElement("p")
    if (ipt.value%2==0){
        p.innerText=`Liczba ${ipt.value} jest parzysta`
        document.body.appendChild(p)
    }
    else {
        p.innerText=`Liczba ${ipt.value} nie jest parzysta`
        document.body.appendChild(p)
    }

})
//na funkcjach deklarowanych function
function forSubmit()
{
    const liczba = document.getElementById("liczba").value
    const p = document.createElement("p")
    if (liczba%2==0){
        p.innerText=`Liczba ${liczba} jest parzysta`
        document.body.appendChild(p)
    }
    else {
        p.innerText=`Liczba ${liczba} nie jest parzysta`
        document.body.appendChild(p)
    }

}
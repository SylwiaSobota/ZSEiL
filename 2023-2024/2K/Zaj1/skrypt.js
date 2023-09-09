let a = 5
let b = 6
let c = 12
/*
alert("Dodawanie "+a+b+c)//"doklejanie" wartosci do 
//tekstu 
alert("Dodawanie "+(a+b+c))//nawias powoduje 
//wykonanie operacji arytmetycznych na zmiennych
alert("Odejmowanie "+(a-b-c))
alert("Mnożenie "+(a*b*c))
alert("Dzielenie "+(a/b/c))
*/
//document.write("<i>Dodawanie "+(a+b+c))
//console.log(Dodawanie +(a+b+c))
//++ --
a+=1 //zapamietrujemy wartosc 6
console.log(a)
a+=2 //zmieniamy wartosc nie poczatkowa a ta z lini 16
console.log(a)
a+=5 //analogicznie zmienamy wartosc z linii 18
console.log(a)

let n = parseInt(prompt("Podaj liczbę:"))
document.write(`podałeś liczbę: ${n} <br>`)
document.write("suma jej z 5 wynosi "+(n+=5)+"<br>")
document.write("po odjęciu od wyniku 4 wyszło "+(n-=4)+"<br>")
document.write("Po pomnożeniu poprzedniego wyniku przez 5 wyszło "+(n*=5)+"<br>")
document.write("reszta z dzielenia wynosi:"+(n%=3)+"<br>")

if (n%2==0){
    document.write("jest podzielne przez 2")
}
else{
    document.write("nie jest podzielne przez 2")
}
if (n%3==0){
    document.write("jest podzielne przez 3")
}
else{
    document.write("nie jest podzielne przez 3")
}
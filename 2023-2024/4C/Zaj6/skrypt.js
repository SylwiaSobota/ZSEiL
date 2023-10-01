let tabela = [];
for(let i = 0; i<10; i++)
{
    tabela.push(parseInt(prompt("Podaj liczbe")))
}
function max(tabela)
{
    return Math.max.apply(null, tabela)
}
document.write(max(tabela)+"<br>")
function min(tabela)
{
    return Math.min.apply(null, tabela)
}
document.write(min(tabela)+"<br>")
let suma_tab = 0
tabela.forEach(a=>{suma_tab+=a})
document.write(suma_tab/10)


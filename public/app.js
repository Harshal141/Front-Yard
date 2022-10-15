// add value in spec now created

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
console.log(dir)

if(dir!=""){
    let count = document.querySelector('#counts').style.display = "none"
    console.log(count)
    document.querySelector('.display-1').innerText = dir;
}
if(dir === "/chart"){
    fin_data = chart
}
else if(dir === "/navbar"){
    fin_data = table
}
else {
    fin_data = data
}

let drop = document.querySelector('#spec')
for(let key in fin_data){
    drop.innerHTML += `<option value="${key}">`
}
let btn = document.querySelector('.icon_box')

btn.addEventListener('click', () => {
    let varr = document.querySelector('.search').value 
    window.location.href = `./code/${fin_data[varr]}/index.html`;
})

// -------------------------------------------------------
// -----------------counter loader------------------------
// -------------------------------------------------------

// update following values to change counter : issue
let forks = 12;
let stars = 12;
let issues = 12;
let contributors = 12;

let count1 = document.querySelector('.count1')
let count2 = document.querySelector('.count2')
let count3 = document.querySelector('.count3')
let count4 = document.querySelector('.count4')

// geting counters
for(let i=0;i<=forks;++i){
    setTimeout(function(){count1.innerText=i},20+10*i)
}
for(let i=0;i<=stars;++i){
    setTimeout(function(){count2.innerText=i},20+10*i)
}
for(let i=0;i<=issues;++i){
    setTimeout(function(){count3.innerText=i},20+10*i)
}
for(let i=0;i<=contributors;++i){
    setTimeout(function(){count4.innerText=i},20+10*i)
}
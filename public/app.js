// add value in spec now created

let drop = document.querySelector('#spec')
for(let key in data){
    drop.innerHTML += `<option value="${key}">`
}

let btn = document.querySelector('.icon_box')

btn.addEventListener('click', () => {
    let varr = document.querySelector('.search').value 
    window.location.href = `./code/${data[varr]}/index.html`;
})
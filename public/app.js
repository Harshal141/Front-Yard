let drop = document.querySelector('select')
for(let key in data){
    drop.innerHTML += `<option value="${key}">${key}</option>`
}

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let varr = drop.value  
    window.location.href = `./code/${data[varr]}/index.html`;
})
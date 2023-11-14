//Покровская 3исип-621
let elems = document.querySelectorAll('#parent tr');
let bool = true;

for(let elem of elems){
    let remove = document.createElement('td');
    
    remove.textContent = 'тык сюда';
    elem.appendChild(remove);

    remove.onclick = ()=> {
        if (bool) {
            elem.style.background = 'green';
            bool = false;
        }else{
            elem.style.background = 'red';
            bool = true;
        }
    }
}
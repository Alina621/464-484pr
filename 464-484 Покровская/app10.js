//Покровская 3исип-621
let elems = document.querySelectorAll('#parent tr');


for(let elem of elems){
    let remove = document.createElement('p');

    remove.textContent = 'клик';
    elem.appendChild(remove);

    remove.onclick = ()=> {
        elem.remove();
    }
}
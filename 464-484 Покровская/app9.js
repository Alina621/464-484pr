//Покровская 3исип-621
let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.onclick = ()=>{
    elem.remove();
    Event.preventDefault();
}
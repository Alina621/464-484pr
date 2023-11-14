//Покровская 3исип-621
let parent = document.querySelector('#parent'); 
let a = 0; 
document.querySelector('input').onclick = ()=> { 
    a++; 
    let li = document.createElement('li'); 
    li.textContent = a; 
    parent.appendChild(li); 
    li.onclick = ()=> { 
        li.remove(); 
    } 
}
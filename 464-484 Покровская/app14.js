//Покровская 3исип-621
let elem = document.querySelectorAll('p');
let span1;

for(let i of elem){
    let span = document.createElement('span');
    span.textContent = i.textContent;
    i.textContent = '';
    i.appendChild(span)
    let remove = document.createElement('a');
    span1 = document.querySelectorAll('span');
    remove.textContent = ' удаляем ';
    i.appendChild(remove);

    remove.onclick = ()=> {
        i.remove();
    }
}
for(let i of span1){
        i.addEventListener('click', function func(){
            let input = document.createElement('input');
            input.value = i.textContent;
    
            i.textContent = '';
            i.appendChild(input);
            input.addEventListener('blur', function() {
            i.textContent = this.value;
            i.addEventListener('click', func)
            });
            i.removeEventListener('click', func)
        })
    }
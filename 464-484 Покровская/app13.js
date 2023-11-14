//Покровская 3исип-621
let elem = document.querySelectorAll('td');

for(let item of elem){
    item.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = item.textContent;

        item.textContent = '';
        item.appendChild(input);

        input.addEventListener('blur', function() {
            item.textContent = this.value;
            item.addEventListener('click', func)
        });
        item.removeEventListener('click', func)
    })}
        

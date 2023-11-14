//Покровская 3исип-621
let elem = document.querySelector('#elem');

elem.onclick = ()=> {
    let input = document.createElement('input');
	input.value = elem.textContent;
	
	
    input.onblur = ()=> {
        elem.textContent = input.value;
        input.remove();
    }
    elem.parentElement.appendChild(input);
}
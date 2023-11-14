//Покровская 3исип-621
let elem = document.querySelector('#elem');

elem.onclick = function func() {
    let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.textContent='';
    elem.appendChild(input);
    input.onblur = ()=> {
        elem.textContent = input.value;
        elem.onclick = func;
    }
    elem.onclick = null;
}

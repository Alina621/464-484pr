//Покровская 3исип-621
let table = document.querySelector('#table');

let k = 2; 
for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 10; i++) {
		let td = document.createElement('td');
		if(k % 2 == 0){
            td.textContent = k; 
        }
        k++;
		
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
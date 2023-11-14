//Покровская 3исип-621
let users = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table = document.getElementById('table');

for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table.appendChild(tr);
    
    td2.addEventListener('click', ()=>{
        td2.textContent = +td2.textContent + 1
    })
    td3.onclick = ()=>{
        
        td3.textContent = (+td3.textContent * 10) / 100 + +td3.textContent;
    }
}

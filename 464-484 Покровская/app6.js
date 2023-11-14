//Покровская 3исип-621
let a = 2;
document.querySelector('button').onclick = () => {
    
    
    let table = document.querySelector('#table');
    let tr = document.createElement('tr');
    for (let i = 1; i <= a; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        
    }
    a +=1;
    console.log(a)
    table.appendChild(tr);
    let trs = document.querySelectorAll('#table tr');

    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}
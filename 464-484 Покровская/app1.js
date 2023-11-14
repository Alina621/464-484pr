//Покровская 3исип-621
let ul = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;
	ul.appendChild(li);
}

let a = document.querySelectorAll('li');

for (let i = 0; i < a.length; i++) {
    a[i].onclick = () => {
        let b = a[i].textContent.split('');
        if (b[1] == "!") {
            
        }else{
            a[i].textContent += "!";
            alert(a[i].textContent);
        }
    }
    
}
//Покровская 3исип-621
let tds = document.querySelectorAll('#ul li');
let bool = true;
for (let td of tds) {
	td.addEventListener('click', function() {
		if(bool){
            this.classList.add('active');
            bool = false;
        }else{
            this.classList.remove('active');
            bool = true;

        }
	});
}
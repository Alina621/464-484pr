//Покровская 3исип-621
let elem = document.querySelector('#elem');
let show = document.querySelector('#show');
let bool = true;

show.addEventListener('click', function() {
	if (bool) {
        elem.classList.add('hidden');
        bool = false;
    }else{
        bool = true
        elem.classList.remove('hidden');
    }
});
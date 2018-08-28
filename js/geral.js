//update 14/11/2017

//fixed nav bar
window.addEventListener('scroll',()=>{
	let scroll = document.documentElement.scrollTop || document.body.scrollTop,
		 menu = document.getElementsByClassName('menu')

	//update 19/11/2017
	scroll >= 48
		? menu[0].classList.add('fixed')
		: menu[0].classList.remove('fixed')
})

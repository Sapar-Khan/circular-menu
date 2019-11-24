let menus = [...document.querySelectorAll('.circular-menu')];

menus.map((menu)=>{
	let items = menu.querySelectorAll('.circular-menu__item');
	let btn = menu.querySelector('.circular-menu__button');

	let active = false;

	let len = items.length;
	let arc = 2 * Math.PI * (1/len);
	let radius = 80;

	btn.addEventListener('click', (e)=>{
		e.preventDefault();

		active = !active;

		if (active){
			btn.classList.add('circular-menu__button_active');
			for(let i = 0; i < len; i++){
				let angel = i * arc;

				let x = radius * Math.cos(angel);
				let y = radius * Math.sin(angel);

				items[i].style.top = 50 + y + '%';
				items[i].style.left = 50 + x + '%';
			}
		}
		else{
			btn.classList.remove('circular-menu__button_active');
			for(let i = 0; i < len; i++){
				items[i].removeAttribute('style');
			}
		}
	});
});
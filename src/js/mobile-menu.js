export function mobileMenu(){
	const mediaMenuBtn = document.querySelector('.media-menu-btn-js');
	const closeMediaMenuBtn = document.querySelector('.close-menu-btn-js');
	const mediaMenu = document.querySelector('.media-menu-js');
	
	mediaMenuBtn.addEventListener('click', onClick);
	function onClick() {
		mediaMenu.classList.toggle('is-open');
	}
	
	closeMediaMenuBtn.addEventListener('click', offClick);
	function offClick() {
		mediaMenu.classList.remove('is-open');
	}
	
	mediaMenu.addEventListener('click', evt => {
		evt.preventDefault();
		const click = evt.target.classList.value;
		if (
			click === 'header-nav_link-media' ||
			click === 'header-address_svg' ||
			click === 'header-bottom_questions-media'
		) {
			mediaMenu.classList.remove('is-open');
		}
	});
}
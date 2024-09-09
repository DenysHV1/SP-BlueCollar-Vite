export function typeOfServices(){
	const serviceBtn1 = document.querySelector('.service-btn1-js');
	const serviceBtn2 = document.querySelector('.service-btn2-js');
	const serviceBtn3 = document.querySelector('.service-btn3-js');
	
	const serviceCard1 = document.querySelector('.service-bottom-card1-js');
	const serviceCard2 = document.querySelector('.service-bottom-card2-js');
	const serviceCard3 = document.querySelector('.service-bottom-card3-js');
	
	//* 3 cards
	serviceBtn1.addEventListener('click', () => {
		serviceCard1.classList.add('is-open');
		serviceCard2.classList.remove('is-open');
		serviceCard3.classList.remove('is-open');
		serviceBtn1.style.backgroundColor = '#fff';
		serviceBtn2.style.backgroundColor = '';
		serviceBtn3.style.backgroundColor = '';
	});
	
	serviceBtn2.addEventListener('click', () => {
		serviceCard1.classList.remove('is-open');
		serviceCard2.classList.add('is-open');
		serviceCard3.classList.remove('is-open');
		serviceBtn1.style.backgroundColor = '';
		serviceBtn2.style.backgroundColor = '#fff';
		serviceBtn3.style.backgroundColor = '';
	});
	
	serviceBtn3.addEventListener('click', () => {
		serviceCard1.classList.remove('is-open');
		serviceCard2.classList.remove('is-open');
		serviceCard3.classList.add('is-open');
		serviceBtn1.style.backgroundColor = '';
		serviceBtn2.style.backgroundColor = '';
		serviceBtn3.style.backgroundColor = '#fff';
	});
	
	const readBtn1 = document.querySelector('.service-card_btn1-js');
	const readBtn2 = document.querySelector('.service-card_btn2-js');
	const readBtn3 = document.querySelector('.service-card_btn3-js');
	
	const cardHiddenText1 = document.querySelector('.card-hidden-text1-js');
	const cardHiddenText2 = document.querySelector('.card-hidden-text2-js');
	const cardHiddenText3 = document.querySelector('.card-hidden-text3-js');
	
	//* btn text hidden
	const btn = document.createElement('button');
	btn.setAttribute('type', 'button');
	btn.classList.add('card-close-text');
	btn.textContent = 'Hide text';
	
	const btn2 = document.createElement('button');
	btn2.setAttribute('type', 'button');
	btn2.classList.add('card-close-text2');
	btn2.textContent = 'Hide text';
	
	const btn3 = document.createElement('button');
	btn3.setAttribute('type', 'button');
	btn3.classList.add('card-close-text3');
	btn3.textContent = 'Hide text';
	
	//* read more
	readBtn1.addEventListener('click', () => {
		readBtn1.classList.add('is-close');
		cardHiddenText1.style.display = 'grid';
		serviceCard1.prepend(btn);
		btn.addEventListener('click', ()=>{
			readBtn1.classList.remove('is-close');
			cardHiddenText1.style.display = 'none';
			btn.remove();
		});
	});
	readBtn2.addEventListener('click', () => {
		readBtn2.classList.add('is-close');
		cardHiddenText2.style.display = 'grid';
		serviceCard2.prepend(btn2);
		btn2.addEventListener('click', ()=>{
			readBtn2.classList.remove('is-close');
			cardHiddenText2.style.display = 'none';
			btn2.remove();
		});
	});
	readBtn3.addEventListener('click', () => {
		readBtn3.classList.add('is-close');
		cardHiddenText3.style.display = 'grid';
		serviceCard3.prepend(btn3);
		btn3.addEventListener('click', ()=>{
			readBtn3.classList.remove('is-close');
			cardHiddenText3.style.display = 'none';
			btn3.remove();
		});
	});
}
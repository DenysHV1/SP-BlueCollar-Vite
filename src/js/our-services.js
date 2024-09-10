import path1 from '../img/png/conditions.png';
import path2 from '../img/png/chip.png';
import path3 from '../img/png/buildings-yellow.png';
import path4 from '../img/png/lock.png';
import path5 from '../img/png/keys.png';
import path6 from '../img/png/normal-house.png';

export function ourServices() {
	const ourServicesArr = [
		{
			png: path1,
			h3: 'Air condition service',
			p: 'Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione.',
		},
		{
			png: path2,
			h3: 'Electrical installation',
			p: 'The art electrical installations that provide all the necessary electrical solutions to suit your business, home or industrial premises.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, perspiciatis',
		},
		{
			png: path3,
			h3: 'General Builder',
			p: 'We provide impeccable safety assessments to both commercial, residential properties. Our adept & knowledgeable electricians.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.',
		},
		{
			png: path4,
			h3: 'Security System',
			p: 'Utilized for measuring flow, temperature level & pressure in the manufacturing industry array of technology is ensure productivity.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae!',
		},
		{
			png: path5,
			h3: 'Service & maintenance',
			p: 'Electrical Services are able to service your entire electrical infrastructure from Thermal Imaging of your switch boards.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, tenetur',
		},
		{
			png: path6,
			h3: 'House Extensions',
			p: 'Traditionally, electricity is supplied through overhead network poles, where the cable is connected to your building.',
			btn: 'View More',
			p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, tenetur',
		},
	];

	const ourServicesList = document.querySelector('.our-services-list-js');

	function setMarkup(arr) {
		return arr
			.map(({ png, h3, p, btn, p2 }, inx) => {
				return `<li class="our-services-item item-services${inx + 1}">
						<img src="${png}" alt="${h3}" class="our-services-item_png" width="48" height="48"/>
						<h3 class="our-services-item_title">${h3}</h3>
						<p class="our-services-item_text">${p}</p>
						<p class="our-services-hidden_text">${p2}</p>
						<button class="our-services-item_btn" type="button">${btn}</button>
					</li>`;
			})
			.join('');
	}
	ourServicesList.insertAdjacentHTML('beforeend', setMarkup(ourServicesArr));
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	const servicesShoveMoreBtn = document.querySelector(
		'.our-services-shove-more-js'
	);
	const serviceHideTextBtn = document.querySelector(
		'.our-services-hide-text-js'
	);

	const serviceItemEl = ourServicesList.querySelectorAll('li');
	servicesShoveMoreBtn.addEventListener('click', () => {
		serviceItemEl.forEach(item => {
			item.style.display = 'grid';
		});
		servicesShoveMoreBtn.style.display = 'none';
		serviceHideTextBtn.style.display = 'grid';
	});

	serviceHideTextBtn.addEventListener('click', () => {
		serviceItemEl.forEach((item, inx) => {
			if (inx >= 2) {
				item.style.display = 'none';
			}
		});
		serviceHideTextBtn.style.display = 'none';
		servicesShoveMoreBtn.style.display = 'grid';
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	ourServicesList.addEventListener('click', onClick);
	function onClick(evt) {
		if (evt.target.nodeName !== 'BUTTON') {
			return;
		}
		evt.target.previousElementSibling.classList.toggle('is-active');
	}
}

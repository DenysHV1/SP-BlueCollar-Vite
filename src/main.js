//todo mobile-menu
import { mobileMenu } from './js/mobile-menu';
mobileMenu();
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo counterYears
import { yerOfCompanyFn } from './js/counterYears';
const START_DATE = 1989;
yerOfCompanyFn(START_DATE); //35 (2024)
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo types-of-service
import { typeOfServices } from './js/types-of-service';
typeOfServices();
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo our-services
import { ourServices } from './js/our-services';
ourServices();
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo ourStatistic
import { ourStatistic } from './js/ourStatistic';
let projectDone = 3956;
let peopleWorking = 854;
let businessPartner = 265;
let happyCustomers = 845;
ourStatistic(projectDone, peopleWorking, businessPartner, happyCustomers);
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo GALLERY

//*data START
import gallery1Picture1x from './img/gallery/gallery1-1x.jpg';
import gallery1Picture2x from './img/gallery/gallery1-3x.jpg';
import gallery2Picture1x from './img/gallery/gallery2-1x.jpg';
import gallery2Picture2x from './img/gallery/gallery2-3x.jpg';
import gallery3Picture1x from './img/gallery/gallery3-1x.jpg';
import gallery3Picture2x from './img/gallery/gallery3-3x.jpg';
import gallery4Picture1x from './img/gallery/gallery4-1x.jpg';
import gallery4Picture2x from './img/gallery/gallery4-3x.jpg';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryArr = [
	{
		img1x: gallery1Picture1x,
		img2x: gallery1Picture2x,
		projectName: 'Fiber cable change',
		projectView: 'Commercial',
	},
	{
		img1x: gallery2Picture1x,
		img2x: gallery2Picture2x,
		projectName: 'Industry machine issue',
		projectView: 'Industry',
	},
	{
		img1x: gallery3Picture1x,
		img2x: gallery3Picture2x,
		projectName: 'Wheel Alloy Change',
		projectView: 'Residential',
	},
	{
		img1x: gallery4Picture1x,
		img2x: gallery4Picture2x,
		projectName: 'Roof Cleaning',
		projectView: 'Commercial',
	},
	{
		img1x: gallery4Picture1x,
		img2x: gallery4Picture2x,
		projectName: 'Roof Cleaning',
		projectView: 'Commercial',
	},
	{
		img1x: gallery4Picture1x,
		img2x: gallery4Picture2x,
		projectName: 'Roof Cleaning',
		projectView: 'Commercial',
	},
	{
		img1x: gallery4Picture1x,
		img2x: gallery4Picture2x,
		projectName: 'Roof Cleaning',
		projectView: 'Commercial',
	},
	{
		img1x: gallery4Picture1x,
		img2x: gallery4Picture2x,
		projectName: 'Roof Cleaning',
		projectView: 'Commercial',
	},
];
//*data END

//*gallery
import { setGalleryMarkup } from './js/gallery';
setGalleryMarkup(galleryArr, SimpleLightbox);

//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//todo contact-us-comments.js

//*data START
import clientPhoto from './img/clients/client1.jpg';

const commentBlockEl = document.querySelector('.special-comment-wrapper-js');
const commentArr = [
	{
		clientImg: clientPhoto,
		clientName: 'Nancy luther',
		clientCity: 'NewYork',
		clientComment:
			'We have had several good experiences with Blue Collar team. Most recently, they replaced our 20-year-old HVAC system with a new, modern, and more efficient system & it worked fine.',
	},
	{
		clientImg: clientPhoto,
		clientName: 'Nancy luther',
		clientCity: 'NewYork',
		clientComment:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repellendus voluptas sapiente praesentium sint ab officia magni. Ducimus dolores est praesentium modi ipsa! Necessitatibus quos perferendis amet saepe facere explicabo?',
	},
	{
		clientImg: clientPhoto,
		clientName: 'Nancy luther',
		clientCity: 'NewYork',
		clientComment:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repellendus voluptas sapiente praesentium sint ab officia magni. Ducimus dolores est praesentium',
	},
];
//*data END

//*set markup
import { setCommentsToHtml } from './js/contact-us-comments';
setCommentsToHtml(commentArr, commentBlockEl);

//*slider
import { commentsSlider } from './js/contact-us-comments';
commentsSlider(commentBlockEl);

//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

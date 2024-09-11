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
// if gallery El <= 4 --- this a section is without BTN
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

import { setGalleryMarkup } from './js/gallery'

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

setGalleryMarkup(galleryArr, SimpleLightbox)
//todo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
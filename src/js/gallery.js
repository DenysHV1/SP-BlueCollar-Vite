
export function setGalleryMarkup(arr, SimpleLightbox) {
	const galleryListEl = document.querySelector('.gallery-list.a.b.c.d');

	function setGalleryMarkup(galleryArrInner) {
		return galleryArrInner
			.map(({ img1x, img2x, projectName, projectView }) => {
				return `<li class="gallery-item">
	  <a class="gallery-link" width='1112px' height = '640px' href="${img2x}">
		<img
		  class="gallery-image"
		  src="${img1x}"
		  alt="${projectName}"
		/>
	  </a>
	  <h3 class="gallery-item_title">${projectName}</h3>
	  <p class="gallery-item_text">${projectView}</p>
	</li>`;
			})
			.join('');
	}

	galleryListEl.insertAdjacentHTML('beforeend', setGalleryMarkup(arr));

	//\\\\\\\\\\\\\\\\\\\\\\
	const galleryItems = galleryListEl.querySelectorAll('li');

	galleryItems.forEach((item, inx) => {
		if (inx > 3) {
			item.classList.add('is-close');
		}
	});

	//Gallery from SimpleLightbox

	new SimpleLightbox('.gallery-list.a.b.c.d a', {
		sourceAttr: 'href',
		overlay: true,
		nav: true,
		captions: true,
		captionsData: 'alt',
		captionDelay: 250,
	});

	//btn - shove more / text hidden
	const shoveMoreBtn = document.querySelector('.gallery-shove-more');

	if (galleryListEl.children.length > 4) {
		shoveMoreBtn.classList.add('is-open');
		let num = 0;
		shoveMoreBtn.addEventListener('click', () => {
			num = num === 0 ? 1 : 0;
			num === 1
				? (shoveMoreBtn.textContent = 'Hide text')
				: (shoveMoreBtn.textContent = 'Shove more');

			galleryItems.forEach((item, inx) => {
				if (inx > 3) {
					item.classList.toggle('is-close');
				}
			});
		});
	}
}

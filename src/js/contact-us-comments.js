export function setCommentsToHtml(arr, block) {
	function setClientMarKup(commentArrInner) {
		return commentArrInner
			.map(({ clientImg, clientName, clientCity, clientComment }) => {
				return `
			<div class="comment-client-block">
		<div class="comment-block-inside-top">
			<div class="client">
				<div class="client-img">
					<img src="${clientImg}" alt="${clientName}">
				</div>
				<div class="client-info">
					<p class="client-name">${clientName}</p>
					<p class="client-city">${clientCity}</p>
				</div>
			</div>
			<div class="client-container-svg">
				<svg class="client_svg" width="24" height="18">
					<use href="/img/sprite.svg#icon-for-comment"></use>
				</svg>
			</div>
		</div>
		<div class="comment-block-inside-bottom">
			<p class="comment-text">${clientComment}</p>
		</div>
	</div>`;
			})
			.join('');
	}

	block.insertAdjacentHTML('beforeend', setClientMarKup(arr));
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function commentsSlider(block) {
	const leftBtnEl = document.querySelector('.comment-btn-left-js');
	const rightBtnEl = document.querySelector('.comment-btn-right-js');
	// const width = block.offsetWidth + 44;
	const swipe = 554;
	let position = 0;
	rightBtnEl.addEventListener('click', () => {
		position -= swipe;
		const maxPosition = block.children.length * swipe - swipe;
		const max = -maxPosition;
		console.log(position);
		if (position <= max) {
			position = max;
			rightBtnEl.style.opacity = '0.6';
			rightBtnEl.disabled = true;
		} else {
			rightBtnEl.style.opacity = '1';
			rightBtnEl.disabled = false;
			leftBtnEl.disabled = false;
			leftBtnEl.style.opacity = '1';
		}
		block.style.transform = `translateX(${position}px)`;
	});

	leftBtnEl.style.opacity = '0.6';
	leftBtnEl.disabled = true;
	leftBtnEl.addEventListener('click', () => {
		position += swipe;
		if (position >= 0) {
			position = 0;
			leftBtnEl.style.opacity = '0.6';
			leftBtnEl.disabled = true;
		} else {
			rightBtnEl.style.opacity = '1';
			rightBtnEl.disabled = false;
		}
		block.style.transform = `translateX(${position}px)`;
	});
}

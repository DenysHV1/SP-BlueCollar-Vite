export function ourStatistic(
	projectDone = 0,
	peopleWorking = 0,
	businessPartner = 0,
	happyCustomers = 0
) {
	const projectDoneEl = document.querySelector('.project-done-js');
	const peopleWorkingEl = document.querySelector('.people-working-js');
	const businessPartnersEl = document.querySelector('.business-partners-js');
	const happyCustomersEl = document.querySelector('.happy-customers-js');

	projectDoneEl.textContent = projectDone;
	peopleWorkingEl.textContent = peopleWorking;
	businessPartnersEl.textContent = businessPartner;
	happyCustomersEl.textContent = happyCustomers + '+';
}

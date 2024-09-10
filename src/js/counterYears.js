export function yerOfCompanyFn (startDate){
	const yerOfCompany2 = document.querySelector('.our-date-js')
	const yerOfCompany = document.querySelector('.about-us-date-js');
	const date = new Date ()
	const yer = date.getFullYear()
	yerOfCompany.textContent = yer - startDate
	yerOfCompany2.textContent = yer - startDate

}
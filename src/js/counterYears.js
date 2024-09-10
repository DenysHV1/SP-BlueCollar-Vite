export function yerOfCompanyFn (){
	const yerOfCompany2 = document.querySelector('.our-date-js')
	const yerOfCompany = document.querySelector('.about-us-date-js');
	const date =  new Date ()
	const yer = date.getFullYear()
	yerOfCompany.textContent = yer - 1989
	yerOfCompany2.textContent = yer - 1989

}
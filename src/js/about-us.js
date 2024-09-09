export function yerOfCompanyFn (){
	const yerOfCompany = document.querySelector('.about-us-date-js');
	const date =  new Date ()
	const yer = date.getFullYear()
	yerOfCompany.textContent = yer - 1989

}
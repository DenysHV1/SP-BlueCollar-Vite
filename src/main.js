//mobile-menu
import { mobileMenu } from './js/mobile-menu';
mobileMenu();

//counterYears
import { yerOfCompanyFn } from './js/counterYears';
const START_DATE = 1989;
yerOfCompanyFn(START_DATE); //35 (2024)

//types-of-service
import { typeOfServices } from './js/types-of-service';
typeOfServices();

//our-services
import { ourServices } from './js/our-services';
ourServices();

//ourStatistic
import { ourStatistic } from './js/ourStatistic';
let projectDone = 3956;
let peopleWorking = 854;
let businessPartner = 265;
let happyCustomers = 845;
ourStatistic(projectDone, peopleWorking, businessPartner, happyCustomers);

import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DiscountAccount } from './class/DiscountAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Souza', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.withdraw(20)
companyAccount.getLoan(250)
console.log(companyAccount)

const discountAccount: DiscountAccount = new DiscountAccount('Discount account', 1234)
discountAccount.deposit(240)
console.log(discountAccount)

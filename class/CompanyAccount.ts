import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    this.setBalance(loanAmount, "LOAN")
  }
}

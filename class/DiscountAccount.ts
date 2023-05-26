import { DioAccount } from "./DioAccount"

export class DiscountAccount extends DioAccount {
  deposit = (depositAmount: number): void => {
    this.setBalance((depositAmount + 10), "DESCONTO DEPOSITO")
    console.log('Novo valor adicionado a sua conta: R$ 10,00!');
  }
}

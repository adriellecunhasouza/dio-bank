export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (depositAmount: number): void => {
      if(this.validateStatus()){
        this.balance += depositAmount
        console.log('Voce depositou: ' + depositAmount)
      } else {
        console.log('Erro ao depositar')
      }
    }
  
    withdraw = (withdrawAmount: number): void => {
      if (this.validateStatus() && this.balance > withdrawAmount) {
        this.balance -= withdrawAmount
        console.log('Voce sacou: ' + withdrawAmount)
      } else {
        console.log('Erro ao sacar')
      }
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }

    setBalance = (amountToAdd: number, type: string): void => {
        if(this.validateStatus()){
          this.balance += amountToAdd
          console.log(`R$ ${amountToAdd} adicionado na sua conta no tipo ${type}`)
        }
      }

    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }

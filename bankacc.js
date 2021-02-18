class Bank{


    createAccount=(accno,name,minimum_balance)=>{
        this.accno=accno;
        this.name=name;
        this.minimum_balance=minimum_balance;
    }

    deposit=(amount)=>{
        this.minimum_balance+=amount
        console.log("your account",this.accno,"has been credited with amount",amount,"available balance:",this.minimum_balance)
    }

    withdrawal=(amount)=>{

        if(amount>minimum_balance){
            console.log("Insufficient Balance in your account")
        }
        else{
            this.minimum_balance-=amount;
            console.log("your account",this.accno,"has been debited with amount",amount,"available balance:",this.minimum_balance)
        }
    }
    balEnq=()=>{
    console.log("The available balance in your account is:",this.minimum_balance)
    
    }

}
var obj=new Bank
obj.createAccount(00541,"amal",5000)
obj.deposit(10000)
obj.withdrawal(500000)
obj.balEnq()

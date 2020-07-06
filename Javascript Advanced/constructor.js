let bankAc = function(name, acNo, deposit, widthraw){
    this.name = name;
    this.acNo = acNo;
    this.deposit = deposit;
    this.widthraw = widthraw;
    this.balance = function(){
        console.log(this.deposit - this.widthraw);
    }
}
const RahimMia = new bankAc('Abdur Rahim', 1123, 10000, 2000);
console.log(RahimMia.balance());
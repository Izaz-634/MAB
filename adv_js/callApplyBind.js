const normalPerson={
    name:"Izaz",
    post:"Manager",
    salary:30000,
    getInfo: function(){
        console.log(this.name+" "+this.post);
    },
    chargeBill:function (amount) {
        this.salary= this.salary - amount;
    }

};


const friendlyPerson= {
    name:"Ashik",
    post:"Manager",
    salary:40000
}

const fChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

fChargeBill(5000);
console.log(friendlyPerson.salary);

const tutaHuaPerson ={
    name:"Akash",
    post:"Manager",
    salary:25000
}

normalPerson.chargeBill.call(tutaHuaPerson,3000);
console.log(tutaHuaPerson.salary);
console.log();

normalPerson.chargeBill.apply(tutaHuaPerson,[2000]);
console.log(tutaHuaPerson.salary);
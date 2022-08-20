class Student{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    printInfo() {
       console.log(this.name);
       console.log(this.id); 
    }
}

class SweStudent extends Student{
    constructor(name,id,fee){
        super(name,id);
        this.fee= fee;
    }
    printInfo(){
        super.printInfo();
        console.log(this.fee);
    }
}

const s1 = new SweStudent("Izaz",201,"6K");

s1.printInfo();


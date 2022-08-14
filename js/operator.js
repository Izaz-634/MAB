let p="izaz";
document.getElementById("op").innerHTML=typeof(p);
document.getElementById("addF").innerHTML=addF(5,6);
function addF(x1,x2){
    return x1+x2;
}

const student={
    fname:"Izaz",
    lname:"Ahmmed",
    fullName:function(){
        return this.fname+" "+this.lname;
    }
}

document.getElementById("obFun").innerHTML=student.fullName();

let txt1="Izaz Ahmmed";
let txt2=txt1.toLowerCase();
document.getElementById("orgi").innerHTML=txt1;
document.getElementById("upper").innerHTML=txt2;

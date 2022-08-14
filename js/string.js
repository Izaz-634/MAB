function lower(){
    let txt1=document.getElementById("inp1").value;
    document.getElementById("inp1").value="";
    document.getElementById("t1").innerHTML=txt1;
    let ch = document.getElementById("choise").value;
    let txt2=undefined;
    if(ch=="1"){
        txt2 = txt1.toLowerCase();
    }else if(ch=="0"){
        txt2 = txt1.toUpperCase();
    }

    document.getElementById("ans-lower").innerHTML=txt2;
}

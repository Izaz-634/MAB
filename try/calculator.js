let string="";

let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        if(e.target.innerHTML=="="){
            let ans=eval(string);
            document.getElementById("out").value=ans;
            string="";
        }else if(e.target.innerHTML=="C"){
            document.getElementById("out").value=" ";
            document.getElementById("inp").value=" ";
            string="";
        }else if(e.target.innerHTML=="D"){
            string=document.getElementById("inp").value;
            string=string.slice(0,string.length-1);
            document.getElementById("inp").value=string;
        }else{
            string+=e.target.innerHTML;
            document.getElementById("inp").value=string;
        }
    })
})
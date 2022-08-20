document.querySelector('#htmlVstext a').setAttribute("href","calculator.html");

const conts = document.querySelectorAll('.container div');
for(let cont of conts ){
    cont.classList.add("box");
}

function ul_active(t1){
    const c1= document.getElementById('active');
    if(c1!=null)c1.removeAttribute('id')
    const links = document.getElementsByClassName('nav-link');
    for(let link of links){
        console.log(t1);
        console.log(link.innerText);
        if(link.innerText == t1){
            link.setAttribute('id','active');
        }
    }
}
document.getElementById("check");
document.getElementById("check").addEventListener('mouseover',function(event){
    const t2 = event.target.innerText;
    console.log(t2);
    ul_active(t2);
});
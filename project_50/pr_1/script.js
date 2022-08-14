const pannels=document.querySelectorAll('.panel');
pannels.forEach((pannel)=>{
    pannel.addEventListener('mouseover',()=>{
        removeActiveClasses();
        pannel.classList.add('active');
    })
})

function removeActiveClasses(){
    pannels.forEach(pannel =>{
        pannel.classList.remove('active');
    })
}
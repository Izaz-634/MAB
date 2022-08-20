//event bubble

// document.getElementById('container').addEventListener('click',function(){
//     console.log("container selected");
// }); 

// document.getElementById('first').addEventListener('click',function(event){
//     console.log("LI clicked");
//     event.stopPropagation();
// });


// document.getElementById('l1').addEventListener('click',function(izaz){
//     console.log("UL clicked");
//     izaz.stopPropagation();
// });

//add iteam

// const items = document.getElementsByClassName('item');

// for(let item of items){
//     item.addEventListener('click',function (event) {
//         event.target.parentNode.removeChild(event.target);
//     });
// }


// document.getElementById('l1').addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
// });



document.getElementById('btn').addEventListener('click',function (event) {
    const iteamParent = document.getElementById('l1');

    const newIteam = document.createElement('li');
    const st = document.getElementById('text').value;
    newIteam.innerText = st;
    newIteam.classList.add('item');

    iteamParent.appendChild(newIteam);
});

document.getElementById('btn-del').addEventListener('click',function(event){
    const val = document.getElementById('text').value;

    const items = document.getElementsByClassName('item');

    for(let item of items){
        const item_text = item.innerText;
        if(item_text == val){
            item.parentNode.removeChild(item);
        }
    }
});
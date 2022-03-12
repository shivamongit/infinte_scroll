let container=document.querySelector(".container > div");
let val=1;
container.addEventListener("scroll",infiniteScroll);

function infiniteScroll(){

    if(container.scrollTop+container.clientHeight+5>=container.scrollHeight ){
        append();
    }
}
var count = 1
function append(){
    let i = 0;
    while(i<25){
        let h3=document.createElement('h3');
        h3.innerText=`Masai Student ${count++}`;
        container.append(h3);
        i++;
    }
}

append();
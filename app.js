const count = document.getElementById('count');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

reset.addEventListener('click', ()=>{
    count.innerHTML = "0";
    zero();
    }, false);

plus.addEventListener('click', ()=>{
    count.innerHTML = `${Number(count.innerHTML) + 1}`;
    if(Number(count.innerHTML)>0){
        count.style.color = "green";
    }
    zero();
}, false);

minus.addEventListener('click', ()=>{
    count.innerHTML = `${Number(count.innerHTML) - 1}`;
    if(Number(count.innerHTML)<0){
        count.style.color = "red";
    }
    zero();
}, false);

function zero(){
    if(Number(count.innerHTML)===0){
        count.style.color = "black";
    }
}

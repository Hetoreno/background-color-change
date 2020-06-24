document.getElementById(`click`).onclick = function(){
    const color ='#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(`move`).style.background=color;

    document.getElementById('display').innerHTML=color;
}
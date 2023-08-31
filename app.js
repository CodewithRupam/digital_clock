const hour = document.getElementById("hour");
const minute = document.getElementById("Minute");
const second = document.getElementById("Second");
const ampm = document.getElementById("timetype");

function update(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    setTimeout (()=>{
        update()
    }, 1000)
}
update()
let hours=document.getElementById("hours")
let mins=document.getElementById("min")
let secs=document.getElementById("sec")
let am=document.getElementById("am")


setInterval(time,1000)
function time(){
    let time=new Date()
let hour=zero(time.getHours())
let min=zero(time.getMinutes())
let sec=zero(time.getSeconds())
    hours.innerHTML=hour
    mins.innerHTML=min
    secs.innerHTML=sec
    if(hours>12){
        am.innerHTML="PM"
    }
function zero (num){
return num<10?"0"+num:num
}
}
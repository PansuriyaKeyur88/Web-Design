// Digital Clock 

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();

document.getElementById("hours").innerText = h;
document.getElementById("minute").innerHTML = m;
document.getElementById("second").innerHTML = s;

function digital() {
    s++;
    if (s == 60) {
        s = 1;
        m++;
        if (m == 60) {
            m = 1;
            m++;
        }
        document.getElementById("minute").innerHTML = m;
    }
    document.getElementById("second").innerHTML = s;

    if (h == 24) {
        h = 1;
    }
    document.getElementById("hours").innerText = h;
}

let b = setInterval(digital, 1000);

// Day Function Formula //

let d = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day = d[a.getDay()];
document.getElementById("day").innerHTML = day;

// Date Formula //

document.getElementById("dd").innerHTML=a.getDate();
document.getElementById("mm").innerHTML=a.getMonth()+1;
document.getElementById("yy").innerHTML=a.getFullYear();

// Session Formula //

if (h>=1 && h<12){
    document.getElementById("session").innerHTML = "AM";
}
else if (h>=12 && h<24){
    document.getElementById("session").innerHTML = "PM";
}





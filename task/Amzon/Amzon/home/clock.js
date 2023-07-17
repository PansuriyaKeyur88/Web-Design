
function time()
{
    let date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

setInterval(time,1000);

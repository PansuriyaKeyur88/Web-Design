
// Clock //

function time()
{
    let date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

setInterval(time,1000);

// Choice //

function change1()
{
    document.getElementById("one").src="https://m.media-amazon.com/images/I/41y71UYlbtL._AC_SY175_.jpg";
}

function change2()
{
   document.getElementById("one").src="https://m.media-amazon.com/images/I/611XVaZrn+L._AC_SY175_.jpg";
   document.getElementById("choice-p").innerHTML="UZARUS Women's Joggers Stretchable Pants | Slim Fit Casual Joggers for Women | Straight Relaxed Fit Trousers | Gym Pants";
}

function change3()
{
    document.getElementById("one").src="https://m.media-amazon.com/images/I/71DaUoG6QnL._AC_SY175_.jpg";
    document.getElementById("choice-p").innerHTML="Cotton colors Classic Joggers"
}

function change4()
{
    document.getElementById("one").src="https://m.media-amazon.com/images/I/71Vg6g8iWYL._AC_SY175_.jpg"
    document.getElementById("choice-p").innerHTML="Amazon Brand - Symbol Women's Slim Track Pants"
}
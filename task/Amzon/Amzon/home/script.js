$(document).ready(function () {

    // Clock //

    setInterval(function () {
        let date = new Date();
        $("#demo").text(date.toLocaleTimeString())
    }, 1000);

    // Choice //

    $(".option-one").click(function () {
        $("#one").attr("src", "https://m.media-amazon.com/images/I/41y71UYlbtL._AC_SY175_.jpg");
        $("#choice-p").text("GRECIILOOKS Women's Tie-Dye Joggers Stretchable Pants | Slim Fit Casual Joggers for Women | Straig…");
    });

    $(".option-two").click(function () {
        $("#one").attr("src", "https://m.media-amazon.com/images/I/611XVaZrn+L._AC_SY175_.jpg");
        $("#choice-p").text("UZARUS Women's Joggers Stretchable Pants | Slim Fit Casual Joggers for Women | Straight Relaxed Fit Trousers | Gym Pants");
    });

    $(".option-three").click(function () {
        $("#one").attr("src", "https://m.media-amazon.com/images/I/71DaUoG6QnL._AC_SY175_.jpg");
        $("#choice-p").text("Cotton colors Classic Joggers");
    });

    $(".option-four").click(function () {
        $("#one").attr("src", "https://m.media-amazon.com/images/I/71Vg6g8iWYL._AC_SY175_.jpg");
        $("#choice-p").text("Amazon Brand - Symbol Women's Slim Track Pants")

    });

});

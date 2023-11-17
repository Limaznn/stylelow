$(document).ready(function () {
    $(".cardInterior").on("click", function () {
        if ($(this).hasClass("slShooter")) {
            let img1 = "StyleLow(1).jpg";
            let titulo1 = "CamisetaStyleLowShooter";
            location.href = "paginacamiseta1.html?" + img1 + "?" + titulo1;
        } else if ($(this).hasClass("slBigSide")) {
            console.log("paginaCamisa2");
            let img2 = "StyleLow(2).jpg";
            let titulo2 = "CamisetaStyleLowBigSideName";
            location.href = "paginacamiseta1.html?" + img2 + "?" + titulo2;
        } else if ($(this).hasClass("slSimplePurple")) {
            let img3 = "StyleLow3.jpg";
            let titulo3 = "CamisetaStyleLowNameSimplePurple";
            location.href = "paginacamiseta1.html?" + img3 + "?" + titulo3;
        } else if ($(this).hasClass("slPurpleJoker")) {
            let img4 = "StyleLow4.jpg";
            let titulo4 = "CamisetaStyleLowPurpleJoker";
            location.href = "paginacamiseta1.html?" + img4 + "?" + titulo4;
        } else if ($(this).hasClass("slSimpleWhite")) {
            let img5 = "StyleLow5.jpg";
            let titulo5 = "CamisetaStyleLowNameSimpleWhite";
            location.href = "paginacamiseta1.html?" + img5 + "?" + titulo5;
        }
    });
});
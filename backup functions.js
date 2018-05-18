function togglemenu() {
    var x = document.getElementById("mnubtn");
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }
}

var all = document.getElementsByClassName('sidemenu');
for (var i = 0; i < all.length; i++) {
  all[i].style.opacity = '0';
}
function togglemenu() {
    var all = document.getElementsByClassName('sidemenu');
    if (x.style.opacity === "1") {
     for (var i = 0; i < all.length; i++) {
  all[i].style.opacity = '0';
}
    } else {
        for (var i = 0; i < all.length; i++) {
  all[i].style.opacity = '1';
}
    }
}
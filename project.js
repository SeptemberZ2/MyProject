const sideMenu = document.getElementById("sideMenu");
document.body.addEventListener("mousemove", function(event) {
    if (event.clientX >= window.innerWidth - 250 ) {
        sideMenu.style.right = "0";
    } else {
        sideMenu.style.right = "-240px"; 
    }
});

function unfoldMenu() {
    var x = document.getElementById("navList");

    if (x.className === "nav_list") {
        x.className += " nav_list-responsive";
    } else {
        x.className = "nav_list";
    }
}
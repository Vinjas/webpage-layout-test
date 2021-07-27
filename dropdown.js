function dropdown() {
    var current = document.getElementsByClassName("sidebar-dropdown__item--expand");

    for (let i = 0; i < current.length; i++) {
        current[i].style.display = "none";
    }
}

function openDropdown(elem) {
    var currentOpen = document.getElementById("dropdown" + elem);

    if(currentOpen.style.display === "none") {
        currentOpen.style.display = "block";
    } else {
        currentOpen.style.display = "none";
    }
}

dropdown();

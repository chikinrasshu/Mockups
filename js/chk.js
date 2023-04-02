function toggleUserMenu(parent, menu) {
    console.log(parent);
    parent.classList.toggle("shown");
    menu.classList.toggle("shown");
}

document.addEventListener("DOMContentLoaded", function () {
    let userMenu = document.querySelectorAll(".user-menu");

    console.log("Buttons: ");
    userMenu.forEach(menu => {
        let btn = menu.querySelector("button");
        let submenu = menu.querySelector("ul");
        if (submenu.classList.contains("shown")) {
            menu.classList.add("shown");
        }

        btn.addEventListener("click", function (e) {
            toggleUserMenu(menu, submenu);
        });
    });

    // Go back links
    let backs = document.querySelectorAll('.go-back');
    backs.forEach(e => {
        e.setAttribute("href", document.referrer);
        e.onclick = function () {
            history.back();
            return false;
        };
    });

});
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
});
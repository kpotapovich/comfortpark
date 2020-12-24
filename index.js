const onScrollFunction = function () {
    let header_panel = document.getElementById('header_panel');
    if (window.pageYOffset > 100) {
        header_panel.style.background = "#009999";
        header_panel.style.boxShadow = "0px  2px 5px #008080";
        header_panel.style.opacity = 1;
    } else {
        header_panel.style.background = "#009999";
        header_panel.style.boxShadow = "0px  2px 5px #008080";
        header_panel.style.opacity = 0.8;
    }
}

const menuBuilder = function () {
    const width = window.outerWidth;
    let burger_container = document.getElementById('burger_container');
    let menu_container = document.getElementById('menu_container');
    let menu_ul = document.getElementById('menu_ul');

    if (width > 980) {
        burger_container.style.display = "none"
        menu_container.style.top = "0px"
        menu_ul.style.display = "flex"

    } else {
        burger_container.style.display = "block"
        menu_container.style.top = null;
        menu_ul.style.display = "block"
    }
}

menuBuilder()
onScrollFunction()

window.onscroll = onScrollFunction;
window.onresize = menuBuilder;

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu_container').classList.toggle("animate");
})
let header_panel = document.getElementById('header_panel');
window.onscroll = function () {
 if (window.pageYOffset>100){
     header_panel.style.background = "#009999";
     header_panel.style.boxShadow = "0px  2px 5px #008080";
     header_panel.style.opacity = 1;
 }else {
     header_panel.style.background = "#009999";
     header_panel.style.boxShadow = "0px  2px 5px #008080";
     header_panel.style.opacity = 0.8;
     // header_panel.style.background = "transparent";
     // header_panel.style.boxShadow = "none";
 }
}

// window.onresize = function() {
//     const width = window.outerWidth;
//     let burger = document.getElementById('burger');
//     let header_panel = document.getElementById('header_panel');
//     let menu_panel = document.getElementById('header_menu');
//
//     if (width > 1200) {
//         burger.style.display = "none";
//         header_panel.appendChild(menu_panel);
//     } else if (width > 800 && width < 1200) {
//         burger.style.display = "none";
//         header_panel.appendChild(menu_panel);
//     } else if (width < 800) {
//         burger.style.display = "block";
//         burger.appendChild(menu_panel);
//     }
// }

// let burger = document.getElementById('burger');
// window.on

// document.querySelector('.burger').addEventListener('click', function(){
//     document.querySelector('.burger span').classList.toggle('active');
// })
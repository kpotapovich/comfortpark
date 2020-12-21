let header_panel = document.getElementById('header_panel');
window.onscroll = function () {
 if (window.pageYOffset>100){
     header_panel.style.background = "#009999";
     header_panel.style.boxShadow = "0px  2px 5px #008080";
     header_panel.style.opacity = 1;
 }else {
     header_panel.style.background = "#009999";
     header_panel.style.boxShadow = "0px  2px 5px #008080";
     header_panel.style.opacity = 0.7;
     // header_panel.style.background = "transparent";
     // header_panel.style.boxShadow = "none";
 }
}
$(document).ready(function () {
  $('.menutoggle').click(function () {
      $('.menutoggle').toggleClass('tactive')
      $('nav').toggleClass('navactive')
  });
});


var popup = document.getElementById("popup");
var popclosebtn = document.getElementById("popcolosebtn");
//popup js code-------------------------

function showpopup(){
    popup.classList.add("showPopup")

}
setTimeout("showpopup()",7000);

function popclose() {
    popup.classList.remove("showPopup");
}
//popup js code end-------------------------

//loder js---------------------------------
setTimeout(function(){
    $('.loder').fadeToggle();
},1500);

//loder js end-------------------------

$("#chatbox").click(function(){
  $(".chatcontent").toggleClass("chatActive");
});
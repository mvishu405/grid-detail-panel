// Import stylesheets
import './style.css';
import $ from "jquery";



$(".grid").on("click", function(){
  var prel = $(this).attr("data-rel");
  $(".pd").removeClass("open");
  $("#"+prel).addClass("open");
});

$(".close-detail-panel").on("click", function(){
  $(this).parent().removeClass("open");
});

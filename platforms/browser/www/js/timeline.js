
var r = $("#myChart").width();
$("#myChart").resize(function(){
  r = $("#myChart").width();
  console.log(r);
});
var w = 0;

console.log(r);

$(".timelinePlay").click(function() {
  $(".timelinePlay").hide();
  $(".timelinePause").show();
  var i = setInterval( function() {
    t = r * w;
    if(t >= r) {
      clearInterval(i);
    } else {
      $(".timelineOverlay").width(t);
      w += 0.001;
    }
  }, 5);
  $(".timelinePause").click(function() {
    clearInterval(i);
    $(".timelinePlay").show();
    $(".timelinePause").hide();
  });
});



// var myVar = setInterval(function(){ myTimer() }, 1000);
//
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("timeBar").innerHTML = t;
// }

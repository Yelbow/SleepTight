

$(document).ready(function () {

  var getClientData = function(){
    $.get("http://u5231p3363.web0091.zxcs.nl/Sleeptight/api/client/3", function(result){
      console.log(result)
    })
  }

  var getSensorData = function(){
    $.get("", function(){
      console.log()
    })
  }


}

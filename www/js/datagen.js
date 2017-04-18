

$(document).ready(function () {

  var sensordata = [["2017-02-17 22:03:00", "start"], ["2017-02-17 22:23:00", "start"], ["2017-02-17 22:28:00", "start"],
                    ["2017-02-17 23:05:00", "start"], ["2017-02-17 23:25:00", "start"], ["2017-02-17 23:36:00", "start"],
                    ["2017-02-17 00:03:00", "start"], ["2017-02-17 00:03:00", "start"], ["2017-02-17 00:03:00", "start"],
                    ["2017-02-17 01:03:00", "start"], ["2017-02-17 01:03:00", "start"], ["2017-02-17 01:03:00", "start"],
                    ["2017-02-17 02:03:00", "start"], ["2017-02-17 02:03:00", "start"], ["2017-02-17 02:03:00", "start"],
                    ["2017-02-17 03:03:00", "start"], ["2017-02-17 03:03:00", "start"], ["2017-02-17 03:03:00", "start"], 
                    ["2017-02-17 04:03:00", "start"], ["2017-02-17 22:05:00", "start"], ["2017-02-17 22:06:00", "start"]];

  // alle tijden = sensordata[x][0]
  // alle starten = sensordata[x][1]
  var lastArr = sensordata.length-1;

  for (v = 0; v <= lastArr ; v++) {
    if(sensordata[v][0] < 14.00) {
      sensordata[v][0] = sensordata[v][0] + 24.00;
      // console.log(sensordata[v][0]);
    };
  };

  var starttijd = sensordata[0][0];
  var laatsteTijd = sensordata[lastArr][0];

  // laat alles uit de array zien
  // for(var i=0; i < sensordata.length; i++){
  //   console.log(sensordata[i]);
  // }

  var alleKwartieren = [];

  // loop startijd elke 15 min
  for(var i = starttijd; i <= laatsteTijd; i = i + .15) {
    c = i.toFixed(2);
    alleKwartieren.push(c);
  };

  console.log(alleKwartieren);


  var new = parseInt(25.98)

  if (25.98 > new +.60){

  }





    // var sensordata = '';
    // var y = 22.00;
    // for(var x = 0; x < 20; x++) {
    //   var z = [y, "start"];
    //   sensordata = [z];
    //   y += 0.07;
    //   y.toFixed(2);
    //   console.log("sensor" + sensordata);
    // }



});

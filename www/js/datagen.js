var data = {};

$(document).ready(function () {


  var sensor15data = getSensor15();
  var arrSensor15 = [];
  function getSensor15(){

    var url = ''
    if (window.location.protocol == 'https:'){
      url = "https://crossorigin.me/http://u5231p3363.web0091.zxcs.nl/Sleeptight/api/sensor/15"
    } else {
      url = "http://u5231p3363.web0091.zxcs.nl/Sleeptight/api/sensor/15"
    }
      if(url !== ''){

      $.get("http://u5231p3363.web0091.zxcs.nl/Sleeptight/api/sensor/15", function(result, error) {
        //console.log(result);
        result;
        for (var key in result){
          arrSensor15.push(result[key]);
        }

      })
    }
  }
  console.log(arrSensor15);

  var sensordata = [["2017-02-17 22:03:00", "start"], ["2017-02-17 22:23:00", "start"], ["2017-02-17 22:28:00", "start"],
                    ["2017-02-17 23:05:00", "start"],
                    ["2017-02-17 00:03:00", "start"], ["2017-02-17 00:24:00", "start"], ["2017-02-17 00:43:00", "start"],
                    ["2017-02-17 01:03:00", "start"], ["2017-02-17 01:12:00", "start"], ["2017-02-17 01:16:00", "start"],
                    ["2017-02-17 02:03:00", "start"], ["2017-02-17 02:45:00", "start"], ["2017-02-17 02:59:00", "start"],
                    ["2017-02-17 03:33:00", "start"], ["2017-02-17 03:38:00", "start"], ["2017-02-17 03:51:00", "start"],
                    ["2017-02-17 04:03:00", "start"], ["2017-02-17 04:12:00", "start"], ["2017-02-17 04:34:00", "start"]];

  //sensordata = arrSensor15;

  // alle tijden = sensordata[x][0]
  // alle starten = sensordata[x][1]
  var lastArr = sensordata.length-1;
  var firstDate = new Date(sensordata[0][0]);

  var startH  = firstDate.getHours();
  var startM  = firstDate.getMinutes();
  var startTime   = startH * 60 + startM;

  // console.log('starttime: ' + startTime);

  // string to date conversion & insert time in minutes
  for (i = 0; i <= lastArr ; i++) {

    var date = new Date(sensordata[i][0]);
    sensordata[i][0] = date;

    var timeH      = sensordata[i][0].getHours();
    var timeM      = sensordata[i][0].getMinutes();
    var totalTime  = timeH * 60 + timeM;

    if (totalTime < startTime){
      totalTime = totalTime + 1440;
    };

    sensordata[i].push(totalTime);

    //console.log(sensordata[i][2]);
  }


  // nieuwe 15 minuten loop rekenen met datasets
  var lastTime   = sensordata[lastArr][2];
  data.hitsPerKwartier = [];
  var kwartierNR = 0;
  for(i = startTime; i < lastTime; i = i + 15){
    var time1 = i;
    var time2 = i + 15;
    var aantalHits = 0;
    kwartierNR++;
    //console.log(time1 + ' ' + time2);

    for (j = 0; j < lastArr; j++) {
      if (sensordata[j][2] >= time1 && sensordata[j][2] < time2) {
        if (sensordata[j][1] == "start") {
          aantalHits++;
        }
      }
    }

  data.hitsPerKwartier.push([time1, aantalHits]);

  //   if (aantalHits > 0) {
  //     console.log(aantalHits + ' hits');
  //   } else {
  //     console.log('0 hits');
  //   }

  }

  // console.log(data.hitsPerKwartier);


    // var time = i;
    // var startInkwartier = [];
    // for (j = 0; j < sensordata.length; j++){
    //     var arrhours = sensordata[j][0].getHours();
    //     var arrminutes = sensordata[j][0].getMinutes();
    //     var arrseconds = sensordata[j][0].getSeconds();
    //     if (sensordata[j+1] !== undefined){
    //       var next = j + 1;
    //       var nextminutes = sensordata[next][0].getMinutes();
    //     }
    //
    //
    //     var sum = arrminutes + time
    //     if(sum < nextminutes){
    //       if (sensordata[j][1] == 'start'){
    //           var blub = {
    //             kwartier: time,
    //             data: sensordata[j]
    //           }
    //           startInkwartier.push(blub)
    //       }
    //     } else {
    //       console.log("blub")
    //     }
        //var n = arrtime.match(/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/ );
        //console.log(n)
    // }



          ///////////////////////////////////////////////////


  //   console.log(startInkwartier)
  //   alleKwartieren.push(i);
  // }


  // console.log(startTijd);
  // console.log(laatsteTijd);
  // loop startijd elke 15 min
  // for(i = starttijd; i <= laatsteTijd; i = i + .15) {
  //   c = i.toFixed(2);
  //   alleKwartieren.push(c);
  // };

  //
  // for (v = 0; v <= lastArr ; v++) {
  //   if(sensordata[v][0] < 14.00) {
  //     sensordata[v][0] = sensordata[v][0] + 24.00;
  //     // console.log(sensordata[v][0]);
  //   };
  // };
  //
  // var starttijd = sensordata[0][0];
  // var laatsteTijd = sensordata[lastArr][0];
  //
  // // laat alles uit de array zien
  // // for(var i=0; i < sensordata.length; i++){
  // //   console.log(sensordata[i]);
  // // }
  //
  // var alleKwartieren = [];
  //
  // // loop startijd elke 15 min
  // for(var i = starttijd; i <= laatsteTijd; i = i + .15) {
  //   c = i.toFixed(2);
  //   alleKwartieren.push(c);
  // };
  //
  // console.log(alleKwartieren);
  //

  // var new = parseInt(25.98)
  //
  // if (25.98 > new +.60){
  //
  // }





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

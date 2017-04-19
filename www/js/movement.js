// deze file is voor animaties
$(document).ready(function () {

  // Hero-swiper
  var dagen = [["dinsdag1", "11 april"], ["woensdag2", "12 april"], ["donderdag3", "13 april"], ["vrijdag4", "14 april"], ["zaterdag5", "15 april"], ["zondag", "16 april"], ["maandag7", "17 april"]];

  //var dagen = ["dinsdag1", "woensdag2", "donderdag3", "vrijdag4","zaterdag5", "zondag6", "maandag7"];
  var slide = dagen.length-1;

  //console.log('aantal in de arr in arr' + dagen.length);

  for(var i = 0; i < slide; i++){
    $('.swiper-slide:nth-child(1)').clone().appendTo('.swiper-wrapper');
  }
  $('a.prev-day').eq(0).css("visibility", "hidden");
  $('a.next-day').eq(slide).css("visibility", "hidden");

  function currentday(){
    dag = document.getElementsByClassName("day-txt");
    txt = document.createTextNode(dagen[slide][0]);

    dagDatum = document.getElementsByClassName("date");
    txtDatum = document.createTextNode(dagen[slide][1]);

    for(var i = 0; i < dag.length; i++){
      dag[i].innerText = txt.textContent;
      dagDatum[i].innerText = txtDatum.textContent;
    }
  }

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    //slidesPerView: 'auto',
    // loop: true,
    // loopedSlides: 2,
    direction: 'horizontal',
    nextButton: '.next-day',
    prevButton: '.prev-day',
    onInit: function(swiper){
      currentday();
    }
    // onSlideChangeEnd: function(swiper){
    //   slideNr = mySwiper.activeIndex;
    //   console.log('slideNr: ' + slideNr);
    // },
    // onSlideNextStart: function(swiper){
    //   slide++;
    //   currentday();
    //   console.log('changed to next slide: slide ' + slide);
    // },
    // onSlidePrevStart: function(swiper){
    //   slide--;
    //   currentday();
    //   console.log('changed to prev slide: slide ' + slide);
    // }
  })
  mySwiper.slideTo(slide, 1);

  mySwiper.on('slideNextStart', function(){
    slide++;
    currentday();
    console.log('changed to next slide: slide ' + slide);
  })

  mySwiper.on('slidePrevStart', function(){
    slide--;
    currentday();
    console.log('changed to prev slide: slide ' + slide);
  })

  // Chart.js

 function minToHours(min){
   var h = min/60;
   h = h.toFixed(0);
   if (h > 24){
     h = h-24;
   }

   var m = min%60;

   console.log(m);
   if (m < 10) {
     return h + ':0' + m;
   } else{
     return h + ':' + m;
   }

 }

 //console.log(data.hitsPerKwartier[1][0]);
 //var eersteLabel = minToHours(data.hitsPerKwartier[1][0]);
 //console.log('hourstomin uitgevoerd: ' + eersteLabel);


  var lastArrHits = data.hitsPerKwartier.length-1;
  var hitsData = [];
  var hitsTime = [];
  for (i = 0; i <= lastArrHits ; i++) {
    //console.log(data.hitsPerKwartier[i]);
    hits = data.hitsPerKwartier[i][1];
    hitsData.push(hits);

    time  = minToHours(data.hitsPerKwartier[i][0]);
    hitsTime.push(time);

    // var span  = document.createElement('span');
    var txt   = document.createTextNode(time);

    $('.timeBar').append('<span>'+time+'</span>');
  }

  //console.log(hitsData);
  Chart.defaults.global.responsive = true;

  var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
        },
        data: {
            labels: hitsTime,
            datasets: [{
                label: '# of Votes',
                data: hitsData,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    // 'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

});

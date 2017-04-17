// deze file is voor animaties
$(document).ready(function () {

  // Hero-swiper

  var dagen = ["dinsdag1", "woensdag2", "donderdag3", "vrijdag4","zaterdag5", "zondag6", "maandag7"];
  var slide = dagen.length-1;

  function currentday(){
    dag = document.getElementsByClassName("day-txt");
    txt = document.createTextNode(dagen[slide]);

    for(var i = 0; i < dag.length; i++){
      dag[i].innerText = txt.textContent;
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


  // var realSlide = mySwiper.realIndex;
  // console.log('huidige dag: ' + slide + 'slide' + realSlide );
  //
  mySwiper.slideTo(3, 1);
  //
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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [1, 4, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
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

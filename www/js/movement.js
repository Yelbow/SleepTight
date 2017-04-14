// deze file is voor animaties
$(document).ready(function () {

  // Hero-swiper
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    nextButton: '.next-day',
    prevButton: '.prev-day'

  })

  var dagen = ["maandag", "dinsdag", "woensdag"];
  var slide = 0;

  mySwiper.on('slideNextStart', function () {
    slide++;
    dag = document.getElementsByClassName("day-txt");     // vind alles met class day stop in array
    txt = document.createTextNode(dagen[slide]);  // stop de goede dag in een text variabele

    for(var i = 0; i < dag.length; i++){              // haal de array leeg tot een day
      dag[i].innerText = txt.textContent;             // Change the content
    }

    console.log('changed to next slide: slide ' + slide);
  });

  mySwiper.on('slidePrevStart', function () {
    slide--;
    dag = document.getElementsByClassName("day-txt");
    txt = document.createTextNode(dagen[slide]);

    for(var i = 0; i < dag.length; i++){
      dag[i].innerText = txt.textContent;
    }

    console.log('changed to prev slide: slide ' + slide);
  });





  // Chart.js
  Chart.defaults.global.responsive = true;

  var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: 'line',
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
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

});

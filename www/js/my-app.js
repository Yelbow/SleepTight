// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var currentpage = "page1";
var pages = ["page1", "page2", "page3", "page4"];

function setPage(page){
  currentpage = page;
  render();
}

function renderPages(){
  disableAllPages();
  document.getElementById(currentpage).style.display = 'flex';
  console.log(currentpage + " rendered");
}

function disableAllPages(){
  for (i = 0; i < pages.length; i++){
    console.log("Disabled page:", pages[i]);
    document.getElementById(pages[i]).style.display = 'none';
  }
}

$(document).ready( () => {
    console.log("Document ready");
    disableAllPages();
    renderPages();
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    disableAllPages();
    renderPages();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

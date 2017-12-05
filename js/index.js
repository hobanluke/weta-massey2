//smooth scrolling - anchor click

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1700);
      return false;
    }
  }
});


//-----Actives menu  | START -----//

//Click menu  

$('#unique-offering-link, #unique-offering-close').click(function() {
   $(this).toggleClass('active');
    $('#unique-offering-dropdown').toggleClass('open');
    $('#unique-offering-arrow').toggleClass('open');
});






$('#supervisor-link, #supervisor-close, #supervisor-image').click(function() {
   $(this).toggleClass('active');
    $('#supervisor-dropdown').toggleClass('open');
    $('#supervisor-arrow').toggleClass('open');
    $('#supervisor-title').toggleClass('open');
    $('#supervisor-image').toggleClass('open');
    $('#internship-dropdown').removeClass('open');
    $('#internship-arrow').removeClass('open');
    $('#internship-title').removeClass('open');
    $('#internship-image').removeClass('open');
    $('#bootcamp-dropdown').removeClass('open');
    $('#bootcamp-arrow').removeClass('open');
    $('#bootcamp-title').removeClass('open');
    $('#bootcamp-image').removeClass('open');
});

$('#bootcamp-link, #bootcamp-close, #bootcamp-image').click(function() {
   $(this).toggleClass('active');
    $('#bootcamp-dropdown').toggleClass('open');
    $('#bootcamp-arrow').toggleClass('open');
    $('#bootcamp-title').toggleClass('open');
    $('#bootcamp-image').toggleClass('open');
    $('#internship-dropdown').removeClass('open');
    $('#internship-arrow').removeClass('open');
    $('#internship-title').removeClass('open');
    $('#internship-image').removeClass('open');
    $('#supervisor-dropdown').removeClass('open');
    $('#supervisor-arrow').removeClass('open');
    $('#supervisor-title').removeClass('open');
    $('#supervisor-image').removeClass('open');
    
});

$('#internship-link, #internship-close, #internship-image').click(function() {
   $(this).toggleClass('active');
    $('#internship-dropdown').toggleClass('open');
    $('#internship-arrow').toggleClass('open');
    $('#internship-title').toggleClass('open');
    $('#internship-image').toggleClass('open');
    $('#bootcamp-dropdown').removeClass('open');
    $('#bootcamp-arrow').removeClass('open');
    $('#bootcamp-title').removeClass('open');
    $('#bootcamp-image').removeClass('open');
    $('#supervisor-dropdown').removeClass('open');
    $('#supervisor-arrow').removeClass('open');
    $('#supervisor-title').removeClass('open');
    $('#supervisor-image').removeClass('open');
});







$('.popuptrigger').click(function() {
   $(this).toggleClass('active');
    $('.popup').toggleClass('open');
      video.pause();
});


//$(document).ready(function(){
//  if ( $('.popup').hasClass('open') ) {
//    $('#main').addClass('woodwork');
//  }
//});


$(document).keyup(function(e) {
  if (e.keyCode === 27){
      $(this).toggleClass('active');
    $('.popup').removeClass('open');
  }   
    
});

$(".small-video-container").click(function(){
    $("#popup-video").attr("src","assets/videos/weta-showreel.mp4").attr('poster',"assets/videos/weta-showreel.jpg").load().play();
});

$(".small-video-container2").click(function(){
    $("#popup-video").attr("src","assets/videos/blade-runner-2049.mp4").attr('poster',"assets/videos/blade-runner-2049.jpg").load().play();
});

$(".small-video-container3").click(function(){
    $("#popup-video").attr("src","assets/videos/ghost-in-the-shell.mp4").attr('poster',"assets/videos/ghost-in-the-shell.jpg").load().play();
});

//$(".small-video-container3").click(function(){
//    $("#popup-video").setAttribute('poster',"assets/videos/ghost-in-the-shell.jpg");   
//});

//-----Video  | START -----//


window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");

	// click on video to play
	video.addEventListener("click", function() {
        console.log("clicked it");
		if (video.paused == true) {
			// Play the video
			video.play();
			
    $('#play-pause').removeClass("icon-pause");
		} else {
			// Pause the video
			video.pause();
    $('#play-pause').addClass("icon-pause");
            
		}
	});
    
    	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			
    $('#play-pause').removeClass("icon-pause");
		} else {
			// Pause the video
			video.pause();
    $('#play-pause').addClass("icon-pause");
            
		}
	});    	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;
	});

//Popup Video
    
	// Video
	var bigvideo = document.getElementById("popup-video");

	// Buttons
	var bigplayButton = document.getElementById("popup-play-pause");
  
	// click on video to play
	bigvideo.addEventListener("click", function() {
		if (bigvideo.paused == true) {
			// Play the video
			bigvideo.play();
			
    $('#popup-play-pause').removeClass("popup-icon-pause");
		} else {
			// Pause the video
			bigvideo.pause();
    $('#popup-play-pause').addClass("popup-icon-pause");
            
		}
	});
    
    	// Event listener for the play/pause button
	bigplayButton.addEventListener("click", function() {
		if (bigvideo.paused == true) {
			// Play the video
			bigvideo.play();

    $('#popup-play-pause').removeClass("popup-icon-pause");
		} else {
			// Pause the video
			bigvideo.pause();
    $('#popup-play-pause').addClass("popup-icon-pause");
            
		}
	});    
	// Update the seek bar as the video plays
	bigvideo.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / bigvideo.duration) * bigvideo.currentTime;
	});

// Progress bars
    
    var progress = document.getElementById('progress');
		var progressBar = document.getElementById('progress-bar');

		// If the browser doesn't support the progress element, set its state for some different styling
		var supportsProgress = (document.createElement('progress').max !== undefined);
		if (!supportsProgress) progress.setAttribute('data-state', 'fake');



			// As the video is playing, update the progress bar
			video.addEventListener('timeupdate', function() {
				// For mobile browsers, ensure that the progress element's max attribute is set
				if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
				progress.value = video.currentTime;
				progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
			});

			// React to the user clicking within the progress bar
			progress.addEventListener('click', function(e) {
				//var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
				var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
				video.currentTime = pos * video.duration;
			});

    
        console.log("second video");
    
    
		var popupprogress = document.getElementById('popup-progress');
		var popupprogressBar = document.getElementById('popup-progress-bar');

		// If the browser doesn't support the progress element, set its state for some different styling
		var supportsProgressa = (document.createElement('popup-progress').max !== undefined);
		if (!supportsProgressa) popupprogress.setAttribute('data-state', 'fake');




			// The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
//			stop.addEventListener('click', function(e) {
//				video.pause();
//				video.currentTime = 0;
//				progress.value = 0;
//			});
            console.log(bigvideo);

			// As the video is playing, update the progress bar
			bigvideo.addEventListener('timeupdate', function() {
				// For mobile browsers, ensure that the progress element's max attribute is set
				if (!popupprogress.getAttribute('max')) popupprogress.setAttribute('max', bigvideo.duration);
				popupprogress.value = bigvideo.currentTime;
				popupprogressBar.style.width = Math.floor((bigvideo.currentTime / bigvideo.duration) * 100) + '%';
                
                console.log(popupprogress.value);
			});

			// React to the user clicking within the progress bar
			popupprogress.addEventListener('click', function(e) {
				//var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
				var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
				bigvideo.currentTime = pos * bigvideo.duration;
			});


}











 //-----Video | END -----//









 //-----Remove Hover for moblie | START -----//


$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for moblie | END -----//








// external js: flickity.pkgd.js


var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
//    initialIndex: 1,
  autoPlay: 2500,
pauseAutoPlayOnHover: false,
//selectedAttraction: 0.2,
//friction: 0.5,
  wrapAround: true,
  
});



    // external js: flickity.pkgd.js
     $(window).load(function () {
    var $carousel = $('.carousel2').flickity({
      contain: true,
      wrapAround: true, 
      autoPlay: 6000,
      pauseAutoPlayOnHover: false,
      pageDots: true
    });       
    var flkty = $carousel.data('flickity');

    function updateStatus() {
      var cellNumber = flkty.selectedIndex + 1;
      $carouselStatus.text( cellNumber + ' /' + flkty.slides.length );
    }
    updateStatus();
    $carousel.on( 'select.flickity', updateStatus );

     });  












$(function () {
	'use strict';

		
		
	 

 })();
 

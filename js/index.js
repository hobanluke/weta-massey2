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

$('.button').click(function() {
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
    $('#supervisor-image').removeClass('close');
    $('#internship-image').addClass('close');
    $('#bootcamp-image').addClass('close');
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
    $('#bootcamp-image').removeClass('close');
    $('#internship-image').addClass('close');
    $('#supervisor-image').addClass('close'); 
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
    $('#supervisor-image').removeClass('close');
    $('#internship-image').addClass('close');
    $('#bootcamp-image').addClass('close');
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
    $('#internship-image').removeClass('close');
    $('#bootcamp-image').addClass('close');
    $('#supervisor-image').addClass('close');
});


$('.popuptrigger').click(function() {
   $(this).toggleClass('active');
    $('.popup').toggleClass('open');
    $('html').toggleClass('open');
      video.pause();
    var bigvideo = document.getElementById("popup-video");
      bigvideo.pause();

    $('#play-pause').addClass("icon-pause");
    $('#popup-play-pause').addClass("popup-icon-pause");
});


$(document).keyup(function(e) {
  if (e.keyCode === 27) 
    $('.popup').removeClass('open'); 
    $('html').removeClass('open');
      video.pause();
    var bigvideo = document.getElementById("popup-video");
    bigvideo.pause();

    $('#play-pause').addClass("icon-pause");
    $('#popup-play-pause').addClass("popup-icon-pause");    
});



$(".small-video-container").click(function(){
    $("#popup-video").attr("src","assets/videos/weta-showreel.ogv").attr("src","assets/videos/weta-showreel.webm").attr("src","assets/videos/weta-showreel.mp4").attr('poster',"assets/videos/weta-showreel.jpg");
    
    $("#title-change").text("Watch our showreel");
    $("#subheading-change").text("");  
    
});

$(".small-video-container2").click(function(){
    $("#popup-video").attr("src","assets/videos/blade-runner-2049.ogv").attr("src","assets/videos/blade-runner-2049.webm").attr("src","assets/videos/blade-runner-2049.mp4").attr('poster',"assets/videos/blade-runner-2049.jpg");
    
    $("#title-change").text("Blade Runner 2049");
    $("#subheading-change").text("Weta Workshop making minatures");    
    
});

$(".small-video-container3").click(function(){
    $("#popup-video").attr("src","assets/videos/ghost-in-the-shell.ogv").attr("src","assets/videos/ghost-in-the-shell.webm").attr("src","assets/videos/ghost-in-the-shell.mp4").attr('poster',"assets/videos/ghost-in-the-shell.jpg");

    $("#title-change").text("Ghost In The Shell");
    $("#subheading-change").text("Weta Workshop behind the scenes");      
    
});


//-----Video  | START -----//


window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");

	// click on video to play
	video.addEventListener("click", function() {
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
				var pos = (e.pageX  - (this.offsetLeft + document.getElementById('video-container').offsetLeft)) / this.offsetWidth;
				video.currentTime = pos * video.duration;
			});

    
//    Pop up
    
		var popupprogress = document.getElementById('popup-progress');
		var popupprogressBar = document.getElementById('popup-progress-bar');

		// If the browser doesn't support the progress element, set its state for some different styling
		var supportsProgressa = (document.createElement('popup-progress').max !== undefined);
		if (!supportsProgressa) popupprogress.setAttribute('data-state', 'fake');


			// As the video is playing, update the progress bar
			bigvideo.addEventListener('timeupdate', function() {
               bigvideo = document.getElementById("popup-video");
				// For mobile browsers, ensure that the progress element's max attribute is set
//				if (!popupprogress.getAttribute('max')) {
                    if(bigvideo.readyState > 0){
                    }
                    popupprogress.setAttribute('max', bigvideo.duration);
//                    popupprogress.setAttribute('max', 100);
//                }
				popupprogress.value = bigvideo.currentTime;
				popupprogressBar.style.width = Math.floor((bigvideo.currentTime / bigvideo.duration) * 100) + '%';
                
            
			});

//			// React to the user clicking within the progress bar
//			popupprogress.addEventListener('click', function(e) {
//				//var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
//				var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
//				bigvideo.currentTime = pos * bigvideo.duration;
//			});
    // React to the user clicking within the progress bar
    
			popupprogress.addEventListener('click', function(e) {
               
				var pos = (e.pageX  - (this.offsetLeft + document.getElementById('popup-video').offsetLeft)) / this.offsetWidth;
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





// Hero Carousel 


var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  autoPlay: 2500,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
  
});


 // Second Carousel 

$(window).load(function () {
    var $carousel = $('.carousel2').flickity({
      imagesLoaded: true,
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






 

$(window).load(function(){
    setTimeout(function(){
        $('#preloader').fadeOut(100, function(){
            $(this).remove();
        });
    }, 2500);
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

// Timeline

// Get all the timeline elements
const timelines = document.querySelectorAll('.Yearly-timeline .timeline');

// Create a new IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is in view, add the animation class
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide');
        }
    });
});

// Observe each timeline element
timelines.forEach(timeline => {
    observer.observe(timeline);
});

//portfolio
// Get all the portfolio sections
const portfolioSections = document.querySelectorAll('.portfolio-section');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Loop through each portfolio section
  portfolioSections.forEach((section) => {
    // Check if the section is in the viewport
    if (isInViewport(section)) {
      // Add a class to show the section
      section.classList.add('show');
    }
  });
});

// Helper function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Slider
// Add a click event listener to the document object
document.addEventListener('click', function(event) {
	// Check if the user clicked on a left or right arrow button inside a slider
	if (event.target.classList.contains('left-arrow')) {
	  prevImage(event.target);
	} else if (event.target.classList.contains('right-arrow')) {
	  nextImage(event.target);
	}
  });
  
  // Define the showImage, prevImage, and nextImage functions as before
  
  function showImage(slider, index) {
	var images = slider.querySelectorAll('img');
	var currentIndex = parseInt(slider.getAttribute('data-current-index'));
	images[currentIndex].classList.remove('active');
	images[index].classList.add('active');
	slider.setAttribute('data-current-index', index);
  }
  
  function prevImage(arrowButton) {
	var slider = arrowButton.closest('.slider');
	var currentIndex = parseInt(slider.getAttribute('data-current-index'));
	var prevIndex = currentIndex - 1;
	if (prevIndex < 0) {
	  prevIndex = slider.querySelectorAll('img').length - 1;
	}
	showImage(slider, prevIndex);
  }
  
  function nextImage(arrowButton) {
	var slider = arrowButton.closest('.slider');
	var currentIndex = parseInt(slider.getAttribute('data-current-index'));
	var nextIndex = currentIndex + 1;
	if (nextIndex >= slider.querySelectorAll('img').length) {
	  nextIndex = 0;
	}
	showImage(slider, nextIndex);
  }
  
  function startSlider(slider) {
	// var interval = parseInt(slider.getAttribute('data-interval'));
	// slider.intervalId = setInterval(function() {
	//   nextImage(slider);
	// }, interval);
  }
  
  function stopSlider(slider) {
	clearInterval(slider.intervalId);
  }
  
  // Initialize each slider
  var sliders = document.querySelectorAll('.slider');
  sliders.forEach(function(slider) {
	slider.setAttribute('data-current-index', '0');
	showImage(slider, 0);
	startSlider(slider);
	slider.addEventListener('mouseover', function() {
	  stopSlider(slider);
	});
	slider.addEventListener('mouseout', function() {
	  startSlider(slider);
	});
  });
  
  // Define the startSlider and stopSlider functions as before, but pass in the slider parameter
  
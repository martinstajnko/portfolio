(function () {
	
	'use strict';

	// Dark mode toggle
	var initThemeToggle = function() {
		const themeToggle = document.getElementById('themeToggle');
		if (!themeToggle) return;
		
		const html = document.documentElement;
		const savedTheme = localStorage.getItem('theme') || 'light';

		// Set initial theme
		if (savedTheme === 'dark') {
			html.classList.add('dark-mode');
			themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
		}

		// Toggle theme on button click
		themeToggle.addEventListener('click', function(e) {
			e.preventDefault();
			html.classList.toggle('dark-mode');
			const isDark = html.classList.contains('dark-mode');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
		});
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	$(function(){
		initThemeToggle();
		goToTop();
	});

}());
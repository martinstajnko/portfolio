(function () {
	'use strict';

	// 1. Dark mode toggle (To je že bilo super, pustimo enako)
	var initThemeToggle = function() {
		const themeToggle = document.getElementById('themeToggle');
		if (!themeToggle) return;
		
		const html = document.documentElement;
		const savedTheme = localStorage.getItem('theme') || 'light';

		if (savedTheme === 'dark') {
			html.classList.add('dark-mode');
			themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
		}

		themeToggle.addEventListener('click', function(e) {
			e.preventDefault();
			html.classList.toggle('dark-mode');
			const isDark = html.classList.contains('dark-mode');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
		});
	};

	// 2. Go To Top (Predelano v Vanilla JS - brez jQuery)
	var goToTop = function() {
		// Poiščemo gumb (če obstaja v HTML-ju)
		const goTopBtn = document.querySelector('.js-gotop');
		const backToTopContainer = document.querySelector('.js-top'); 
		// Opomba: Če v HTML nimaš elementa s class="js-gotop" ali "js-top", ta del ne bo naredil ničesar (kar je OK).

		if (goTopBtn) {
			goTopBtn.addEventListener('click', function(event) {
				event.preventDefault();
				window.scrollTo({
					top: 0,
					behavior: 'smooth' // To nadomesti jQuery .animate()
				});
			});
		}

		if (backToTopContainer || goTopBtn) {
			const target = backToTopContainer || goTopBtn;
			window.addEventListener('scroll', function() {
				if (window.scrollY > 200) {
					target.classList.add('active');
				} else {
					target.classList.remove('active');
				}
			});
		}
	};

	// 3. Poženemo, ko je stran naložena
	document.addEventListener('DOMContentLoaded', function() {
		initThemeToggle();
		goToTop();
	});

}());
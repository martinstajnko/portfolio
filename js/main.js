(function () {
	'use strict';

	// 1. Dark mode toggle
	var initThemeToggle = function() {
		const themeToggle = document.getElementById('themeToggle');
		if (!themeToggle) return;
		
		const html = document.documentElement;
		
		// Nastavimo 'dark' kot privzeto, če ni shranjene preference
		const savedTheme = localStorage.getItem('theme') || 'dark';

		// Nastavi začetno stanje
		if (savedTheme === 'dark') {
			html.classList.add('dark-mode');
			themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
		} else {
			themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
		}

		// Preklop ob kliku
		themeToggle.addEventListener('click', function(e) {
			e.preventDefault();
			html.classList.toggle('dark-mode');
			
			const isDark = html.classList.contains('dark-mode');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			
			themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
		});
	};

	// 2. Go To Top (Vanilla JS)
	var goToTop = function() {
		const goTopBtn = document.querySelector('.js-gotop');
		const backToTopContainer = document.querySelector('.js-top'); 
		
		if (goTopBtn) {
			goTopBtn.addEventListener('click', function(event) {
				event.preventDefault();
				window.scrollTo({ top: 0, behavior: 'smooth' });
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

	// 3. Poženi funkcije
	document.addEventListener('DOMContentLoaded', function() {
		initThemeToggle();
		goToTop();
	});

}());
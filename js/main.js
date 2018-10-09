//fadeIn on Page load
const page = document.documentElement;
window.onload = fadeIn;

function fadeIn() {
	page.style.opacity = '1';
}

//Preload
setTimeout(function() {
	document.body.className = '';
}, 500);

//----------------------------------------------------

let menuBtn = document.querySelector('.menu-btn');
let navLink = document.querySelector('.nav-content').querySelectorAll('a');
let menuIcon = document.querySelector('.menu-icon');
let pagescreen = document.querySelector('body');
let screen = window;

function openMenu(e) {
	menuBtn.classList.toggle('show');
	menuIcon.classList.toggle('arrow-close');
	page.classList.toggle('no-scroll');

	for (var i = 0; i < navLink.length; i++) {
		navLink[i].classList.toggle('show');
	}

	e.preventDefault();
	e.stopImmediatePropagation();
}

function closeMenu() {
	if (menuBtn.classList.contains('show')) {
		menuBtn.classList.remove('show');
		menuIcon.classList.remove('arrow-close');
		menuBtn.classList.remove('show');

		page.classList.remove('no-scroll');

		for (var i = 0; i < navLink.length; i++) {
			navLink[i].classList.toggle('show');
		}
	}
}

menuBtn.addEventListener('click', openMenu, false);
screen.addEventListener('click', closeMenu, false);

//------------------------------------------------------

let prevScroll = window.pageYOffset;
window.onscroll = hideMenuOnScroll;

function hideMenuOnScroll() {
	const currentScroll = window.pageYOffset;

	if (prevScroll > currentScroll) {
		document.getElementById('menu').style.opacity = '1';
	} else {
		document.getElementById('menu').style.opacity = '0';
	}
	prevScroll = currentScroll;
}

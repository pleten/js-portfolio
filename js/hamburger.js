function toggleHamburgerMenu() {
	document.querySelector('.hamburger').classList.toggle('is-active');
	document.querySelector('.header_navigation').classList.toggle('is-active');
}

document.querySelector('.hamburger').addEventListener('click', toggleHamburgerMenu);
document.querySelector('.header_navigation.is-active').addEventListener('click', toggleHamburgerMenu);

document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.diamond-slider .slide');
	let currentSlide = 0;

	function showNextSlide() {
		slides[currentSlide].classList.remove('active');
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add('active');
	}

	setInterval(showNextSlide, 3000);
	slides[currentSlide].classList.add('active');
});


document.getElementById('navbar2').style.display = 'none';




window.addEventListener('resize', toggleNavbar);
function handleResize() {
	var slides = document.querySelectorAll('.slide');
	var smallImages = document.querySelectorAll('[id^="small"]');

	if (window.innerWidth <= 1100) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (var j = 0; j < smallImages.length; j++) {
			smallImages[j].style.display = 'none';
		}
	} else {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'block';
		}
		for (var j = 0; j < smallImages.length; j++) {
			smallImages[j].style.display = 'block';
		}
	}
}


window.addEventListener('load', handleResize);
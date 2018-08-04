// слайдер
const prevSliderBtn = document.querySelector('.slider__button--prev'),
			nextSliderBtn = document.querySelector('.slider__button--next'),
			sliderWrapper = document.querySelector('.slider__inner-wrapper'),
			sliderImages = Array.from(document.getElementsByClassName('slider__item'));
let sliderImgCounter = 0;

const transformFunc = counter => sliderWrapper.style.transform = `translateX(-${counter * 100}%)`;

nextSliderBtn.addEventListener('click', event => {
	event.preventDefault();
	if (sliderImgCounter < sliderImages.length - 1) {
		sliderImgCounter++;
		transformFunc(sliderImgCounter);
		prevSliderBtn.classList.remove('slider__button--disabled');
		if (!(sliderImgCounter < sliderImages.length - 1)) nextSliderBtn.classList.add('slider__button--disabled');
	}
});

prevSliderBtn.addEventListener('click', event => {
	event.preventDefault();
	if (sliderImgCounter > 0) {
		sliderImgCounter--;
		transformFunc(sliderImgCounter);
		if (sliderImgCounter === 0) prevSliderBtn.classList.add('slider__button--disabled');
		if (sliderImgCounter < sliderImages.length - 1) nextSliderBtn.classList.remove('slider__button--disabled');
	}
});


// отображение бургер навигации
const navigationItems = Array.from(document.getElementsByClassName('navigation__item--burger')),
			navigationList = document.getElementById('navigation__list--burger'),
			burgerBtn = document.getElementById('navigation__burger');
let isNavVisible = false;

burgerBtn.addEventListener('click', event => {
	event.preventDefault;
	burgerBtn.classList.toggle('navigation__burger--close');
	isNavVisible = !isNavVisible;
	if (isNavVisible) {
		navigationList.style = 'display: block';
		navigationItems.forEach((item, i) => setTimeout(() => item.style = 'opacity: 1', 100 * i));
	} else {
		setTimeout(() => navigationList.style = 'display: none', 100 * (navigationItems.length + 1));
		navigationItems.forEach((item, i) => setTimeout(() => item.style = 'opacity: 0', 100 * (navigationItems.length - 1 - i)));
	}
})


// навигация по якорям
const $page = $('html, body'),
			downBtns = Array.from(document.getElementsByClassName('down-button')),
			navLinks = Array.from(document.getElementsByClassName('navigation__link')),
			links = [...navLinks, ...downBtns];

links.forEach(link => 
	$(link).click(() => 
		$page.animate({scrollTop: $($.attr(link, 'href')).offset().top}, 400)));


// переключение интерактивных карт
const locationBtns = Array.from(document.getElementsByClassName('location__button')),
			locationMaps = Array.from(document.getElementsByClassName('location__map'));

locationBtns.forEach((btn, i) => btn.addEventListener('click', event => {
		event.preventDefault();
		locationMaps.forEach((map, y) => {
			locationBtns[y].classList.remove('location__button--active');
			map.classList.remove('location__map--active');
		});
		btn.classList.add('location__button--active');
		locationMaps[i].classList.add('location__map--active');
	})
);

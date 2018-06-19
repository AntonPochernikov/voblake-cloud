// слайдер
const prevSliderBtn = document.querySelector('.slider__button--prev');
const nextSliderBtn = document.querySelector('.slider__button--next');
const sliderWrapper = document.querySelector('.slider__inner-wrapper');
const sliderImages = document.getElementsByClassName('slider__item');

let sliderImagesArr = Array.from(sliderImages);
let sliderImageCounter = 0;

transformFunc = (counter) => sliderWrapper.style.transform = `translateX(-${counter * 100}%)`;
transformFunc(sliderImageCounter);

nextSliderBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if (sliderImageCounter < sliderImagesArr.length - 1) {
		sliderImageCounter++;
		transformFunc(sliderImageCounter);
		prevSliderBtn.classList.remove('slider__button--disabled');
		sliderImageCounter < sliderImagesArr.length - 1 ? '' : nextSliderBtn.classList.add('slider__button--disabled');
	} else {
		// let tempImg = sliderImagesArr.shift();
		// sliderImagesArr.push(tempImg);
	}
})
prevSliderBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if (sliderImageCounter > 0) {
		sliderImageCounter--;
		transformFunc(sliderImageCounter);
		sliderImageCounter ? '' : prevSliderBtn.classList.add('slider__button--disabled');
		sliderImageCounter < sliderImagesArr.length - 1 ? nextSliderBtn.classList.remove('slider__button--disabled') : '';
	} else {
		// let tempImg = sliderImagesArr.shift();
		// sliderImagesArr.push(tempImg);
	}
})

// навигация(бургер)
const navigationItems = document.getElementsByClassName('navigation__item--burger');
const navigationList = document.getElementById('navigation__list--burger');
const burgerBtn = document.getElementById('navigation__burger');
let navigationItemsArr = Array.from(navigationItems);
let isNavigationVisible = false;

burgerBtn.addEventListener('click', (event) => {
	event.preventDefault;
	burgerBtn.classList.toggle('navigation__burger--close');
	if (!isNavigationVisible) {
		for (let i = 0; i < navigationItemsArr.length; i++) {
			navigationList.style = 'display: block';
			setTimeout(() => navigationItemsArr[i].style = 'opacity: 1', 100 * i);
		}
		isNavigationVisible = true;
	} else {
		for (let i = navigationItemsArr.length - 1; i >= 0; i--) {
			setTimeout(() => navigationItemsArr[i].style = 'opacity: 0', 100 * (navigationItemsArr.length - 1 - i));
			setTimeout(() => navigationList.style = 'display: none', 100 * (navigationItems.length + 1));
		}
		isNavigationVisible = false;
	}
})
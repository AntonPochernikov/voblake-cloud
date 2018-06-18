const prevSliderBtn = document.querySelector('.slider__button--prev');
const nextSliderBtn = document.querySelector('.slider__button--next');
const sliderWrapper = document.querySelector('.slider__inner-wrapper');
const sliderImages = document.getElementsByClassName('slider__item');

let sliderImagesArr = Array.from(sliderImages);
let sliderImageCounter = 0;

transformFunc = (counter) => sliderWrapper.style.transform = `translateX(-${counter * 100}%)`;
transformFunc(sliderImageCounter);

nextSliderBtn.addEventListener('click', function(event) {
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
prevSliderBtn.addEventListener('click', function(event) {
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
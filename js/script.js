window.addEventListener("DOMContentLoaded", () => {
	const tabsBtn = document.querySelectorAll(".tabheader__item");
	const tabContent = document.querySelectorAll(".tabcontent");
	const tabParent = document.querySelector(".tabheader");

	function hideTabContent() {
		tabContent.forEach((item) => {
			item.style.display = "none";
		});
		tabsBtn.forEach((item) => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(idx = 0) {
		tabContent[idx].style.display = "block";

		tabsBtn[idx].classList.add("tabheader__item_active");
	}
	hideTabContent();
	showTabContent();

	tabParent.addEventListener("click", (event) => {
		if (event.target && event.target.classList.contains("tabheader__item")) {
			tabsBtn.forEach((item, idx) => {
				if (event.target == item) {
					hideTabContent();
					showTabContent(idx);
				}
			});
		}
	});

	// timer

	const timeEnd = "2021-11-24";

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());

		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	// getTimeRemaining();

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector);
		const days = document.querySelector("#days");
		const hours = document.querySelector("#hours");
		const minutes = document.querySelector("#minutes");
		const seconds = document.querySelector("#seconds");
		const timeInterval = setInterval(updateClock, 1000);

		updateClock();
		function updateClock() {
			const t = getTimeRemaining(endtime);
			days.innerHTML = t.days;
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(".timer", timeEnd);

	// modal

	/* ===================== Код из урока № 33 (Модальные окна) ===================== */ 

	// const triggerBtn = document.querySelectorAll('[data-modal]');
	// const modal = document.querySelector('.modal');
	// const modalCloseBtn = document.querySelector('.modal__close');

	// triggerBtn.forEach(btn => {
	// 	btn.addEventListener('click', ()=>{
	// 		modal.classList.remove('hide');
	// 		modal.classList.add('show');
	// 		document.body.style.overflow = 'hidden';
	// 	})
	// });

	// modalCloseBtn.addEventListener('click', (e)=>{
	// 	modal.classList.add('hide');
	// 	modal.classList.remove('show');
	// 	document.body.style.overflow = '';
	// })

	// modal.addEventListener('click', (e)=>{
	// 	if (e.target == modal){
	// 		modal.classList.add('hide');
	// 	modal.classList.remove('show');
	// 	document.body.style.overflow = '';
	// 	}
	// })

	// document.addEventListener('keydown', (e)=>{
	// 	if (e.key == 'Escape'){
	// 		modal.classList.add('hide');
	// 	modal.classList.remove('show');
	// 	document.body.style.overflow = '';
	// 	}
	// });



	 /* ===================== Оптимизация кода ===================== */ 
	// Объявление переменных 
	const triggerBtn = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('.modal__close');

	// Прослушка событий
	triggerBtn.forEach(btn => {
		btn.addEventListener('click', openModal)
	});
	modal.addEventListener('click', (e)=>{
		if (e.target == modal || e.target == modalCloseBtn){
			closeModal()
		} 
	});
	document.addEventListener('keydown', (e)=>{
		if (e.key == 'Escape'){
			closeModal()
		}
	});
	
	function openModal() {
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.body.style.overflow = 'hidden';
	}

	function closeModal(){
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}
	
});

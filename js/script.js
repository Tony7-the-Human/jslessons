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
});

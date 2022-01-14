"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const modalButtons = document.querySelector(".show-modal");

modalButtons.addEventListener("click", () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		modal.classList.add("hidden");
		overlay.classList.add("hidden");
	}
});

document.querySelectorAll(".polaroid-flip-container").forEach(element => {
	element.addEventListener("click", () => element.classList.toggle("flipped"));
});

const MIN_ANGLE = -8;
const MAX_ANGLE = 8;

const card = document.querySelector(".hermit-card");
const hand = document.querySelector(".hermit-hand");
let interval;
let angle = MAX_ANGLE;


card.addEventListener("mouseenter", () => {
	angle = angle === MAX_ANGLE ? MIN_ANGLE : MAX_ANGLE;
	hand.style.transform = `rotate(${angle}deg)`;

	interval = setInterval(() => {
		angle = angle === MAX_ANGLE ? MIN_ANGLE : MAX_ANGLE;
		hand.style.transform = `rotate(${angle}deg)`;
	}, 800);
});

card.addEventListener("mouseleave", () => {
	clearInterval(interval);
	hand.style.transform = "rotate(0deg)";
});

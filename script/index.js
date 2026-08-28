document.querySelectorAll(".polaroid-flip-container").forEach(element => {
	element.addEventListener("click", () => element.classList.toggle("flipped"));
});

function revealLetters(element, delayBetweenLetters = 50) {
	const text = element.textContent;
	const words = text.trim().split(/\s+/);

	element.innerHTML = "";
	let globalIndex = 0;

	words.forEach((word, wordIdx) => {
		const wordSpan = document.createElement("span");
		wordSpan.style.whiteSpace = "nowrap"; // prevents the word from breaking mid-line

		[...word].forEach(letter => {
			const letterSpan = document.createElement("span");
			letterSpan.textContent = letter;
			letterSpan.style.opacity = "0";
			letterSpan.style.display = "inline-block";
			letterSpan.style.transform = "translateY(5px)";
			letterSpan.style.transition = "opacity 0.5s, transform 0.5s";
			wordSpan.appendChild(letterSpan);

			setTimeout(() => {
				letterSpan.style.opacity = "1";
				letterSpan.style.transform = "translateY(0)";
			}, globalIndex * delayBetweenLetters);

			globalIndex++;
		});

		element.appendChild(wordSpan);
// space between words (outside the letter spans, so line breaks can happen here)
		if (wordIdx < words.length - 1) {
			element.appendChild(document.createTextNode(" "));
			globalIndex++; // counts the space in the timing, keeps a natural rhythm
		}
	});
}

revealLetters(document.querySelector(".quote-text"));

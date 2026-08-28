// song controller
const songs = [
	{
		name: "Wild Horses",
		artist: "Rolling Stones",
		path: "wild_horses.mp3"
	},
	{
		name: "Let Me Kiss You",
		artist: "Morissey",
		path: "let_me_kiss_you.mp3"
	},
];

let audio = new Audio();
audio.volume = 0.3;

let songIndex = 0;

const updateSong = () => {
	const currSong = songs[songIndex];
	audio.src = `public/songs/${currSong.path}`;
	document.getElementById("song-artist-name").innerText = currSong.artist;
	document.getElementById("song-name").innerText = currSong.name;
}

document.addEventListener("click", () => {
	document.querySelector(".song-container-wrapper").classList.add("active");
	updateSong();
	setTimeout(() => playSong(), 500);
	setTimeout(() => document.querySelector(".horse-container").classList.add("visible"), 18000);
}, { once: true });

const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

const playSong = () => {
	audio.play();
	playIcon.style.display = "none";
	pauseIcon.style.display = "inline";
}

const pauseSong = () => {
	audio.pause();
	playIcon.style.display = "inline";
	pauseIcon.style.display = "none";
}

document.getElementById("play-song-btn").addEventListener("click", event => {
	if(audio.paused) {
		playSong();
	}
	else {
		pauseSong();
	}
});

const nextSong = () => {
	songIndex = (songIndex + 1) % songs.length;
	updateSong();
	playSong();
}

document.getElementById("next-song-btn").addEventListener("click", nextSong);

const prevSong = () => {
	songIndex = ((songIndex - 1) % songs.length + songs.length) % songs.length;
	updateSong();
	playSong();
}

document.getElementById("prev-song-btn").addEventListener("click", prevSong);

audio.addEventListener("ended", () => setTimeout(() => nextSong(), 1000));

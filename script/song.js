// song controller
const songs = [
	{
		name: "Let Me Kiss You",
		artist: "Morissey",
		path: "let_me_kiss_you.mp3"
	},
	{
		name: "Let Me Kiss You 2",
		artist: "Morissey",
		path: "let_me_kiss_you2.mp3"
	},
	{
		name: "Let Me Kiss You 3",
		artist: "Morissey",
		path: "let_me_kiss_you3.mp3"
	}
];

let audio = new Audio();
audio.volume = 0.005;
audio.currentTime = 5;

let songIndex = 0;

const updateSong = () => {
	const currSong = songs[songIndex];
	audio.src = `public/songs/${currSong.path}`;
	document.getElementById("song-artist-name").innerText = currSong.artist;
	document.getElementById("song-name").innerText = currSong.name;
}

document.addEventListener("click", () => {
	updateSong();
	playSong();
	document.querySelector(".song-container-wrapper").classList.add("active");
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

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
	{
		name: "Forever",
		artist: "Siouxie and the Banshees",
		path: "forever.mp3"
	},
	{
		name: "Bizarre Love Triangle",
		artist: "New Order",
		path: "bizarre_love_triangle.mp3"
	},
	{
		name: "Weird Fishes / Arpeggi",
		artist: "Radiohead",
		path: "weird_fishes.mp3"
	},
	{
		name: "Perfect",
		artist: "Smashing Pumpkins",
		path: "perfect.mp3"
	},
	{
		name: "Outono",
		artist: "Djavan",
		path: "outono.mp3"
	},
	{
		name: "A Letter to Elise",
		artist: "The Cure",
		path: "a_letter_to_elise.mp3"
	},
	{
		name: "Matte Kudasai",
		artist: "King Crimson",
		path: "matte_kudasai.mp3"
	},
	{
		name: "Já Sei",
		artist: "Zimbra",
		path: "ja_sei.mp3"
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
	setTimeout(() => document.querySelector(".song-container-wrapper").classList.add("active"), 4000);
	updateSong();
	setTimeout(() => playSong(), 500);
	setTimeout(() => document.querySelector(".horse-container").classList.add("visible"), 5000);
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

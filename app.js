const pictures = [
	{
		artist: "Steve Green'hitch",
		date: "October 26 2016",
		title: "Mountain Lake",
		img: "assets/forest.jpg",
	},
	{
		artist: "John Rocks",
		date: "November 02 2026",
		title: "Pacific Ocean",
		img: "assets/ocean.jpg",
	},
	{
		artist: "Suzy Fallia",
		date: "April 01 1999",
		title: "Oregon Falls",
		img: "assets/waterfall.jpg",
	},
	{
		artist: "Elisabeth Hickio",
		date: "March 12 2012",
		title: "Down The Road",
		img: "assets/hiking.jpg",
	},
	{
		artist: "Miranda Brand",
		date: "June 06 2018",
		title: "Mediteranean Sea",
		img: "assets/sea.jpg",
	},
];

const $btn = document.querySelectorAll(".carousel-btn");

let actu = 0;

for (let i = 0; i < $btn.length; i++) {
	$btn[i].addEventListener("click", () => {
		changerbtn(i);
		clearInterval(timerInterval);
		interval();
	});
}

function changerbtn(i) {
	$btn[actu].classList.remove("carousel-btn-active");
	$btn[i].classList.add("carousel-btn-active");

	$btn[actu].innerHTML = "";
	$btn[i].innerHTML = `<div class="carousel-btn-description">
							<h3>${pictures[i].artist}</h3>
							<p>${pictures[i].date}</p>
						</div>
						<h2>${pictures[i].title}</h2>`;
	actu = i;
}




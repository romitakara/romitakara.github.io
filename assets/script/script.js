let slideWidth = 500; 
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("slide-image-row");
let imageNum = 0;

function showNextImage() {
	imageNum = imageNum + 1;

	let shift = -1*imageNum*slideWidth;

	imageRow.style.left = shift + "px";
	checkControls();
}

nextButton.onclick = showNextImage;


function showPrevImage() {
	
	imageNum = imageNum - 1;

	let shift = -1*imageNum*slideWidth;

	imageRow.style.left = shift + "px";
	checkControls();

}

prevButton.onclick = showPrevImage;


let totalImages = document.getElementsByClassName("slide-image").length;


function checkControls() {

	if (imageNum === 0) {
	
		prevButton.classList.add("hidden");

	}
	else if (prevButton.classList.contains("hidden")) {
	
		prevButton.classList.remove("hidden");
		
	}

	if (imageNum === 3) {

		nextButton.classList.add("hidden");
		
	}
	else if (nextButton.classList.contains("hidden")) {
	
		nextButton.classList.remove("hidden");

	}
}
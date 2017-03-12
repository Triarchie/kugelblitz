<!--
/*
	JavaScript for a gallery showing featured games for Kugelblitz
	By Jose Bautista
	Student ID: w1544934
*/

var galleryIndex = 1;
showImage(galleryIndex);

function plusIndex(n) {
	showImage(galleryIndex += n);
}

function currentIndex(n) {
	showImage(galleryIndex = n);
}

function showImage(n) {
	var i;
	var pictures = document.getElementsByClassName("featuredGame");
	var thumbnails = document.getElementsByClassName("pointer");
	
	if (n > pictures.length) {
		galleryIndex = 1;
	} if (n < 1) {
		galleryIndex = pictures.length;
	} for (i = 0; i < pictures.length; i++) {
		pictures[i].style.display = "none";
	} for (i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(" opacity-off", "");
	}
	pictures[galleryIndex-1].style.display = "block";
	thumbnails[galleryIndex-1].className += " opacity-off";
}

// description box match with gallery

var textIndex = 1;
showText(textIndex);

function plusIndexText(n) {
	showText(textIndex += n);
}

function currentIndexText(n) {
	showText(textIndex = n);
}

function showText(n) {
	var i;
	var text = document.getElementsByClassName("featuredDescription");
	var thumbnails = document.getElementsByClassName("pointer");
	
	if (n > text.length) {
		textIndex = 1;
	} if (n < 1) {
		textIndex = text.length;
	} for (i = 0; i < text.length; i++) {
		text[i].style.display = "none";
	} for (i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(" opacity-off", "");
	}
	text[textIndex-1].style.display = "block";
	thumbnails[textIndex-1].className += " opacity-off";
}


// parse pull down list for background/text colour change

function getSelectedValue(selectList) {
	return selectList[selectList.selectedIndex].value;
}

// change background colour

function backgroundColour(formInput) {
	var backgroundColourValue = getSelectedValue(formInput.background);
	var gallery = document.getElementById("galleryContainer");


	if (backgroundColourValue === "default") {
		gallery.className = "defaultBackground";
	} if (backgroundColourValue === "white") {
		gallery.className = "whiteBackground";
	} if (backgroundColourValue === "black") {
		gallery.className = "blackBackground";
	} if (backgroundColourValue === "red") {
		gallery.className = "redBackground";
	} if (backgroundColourValue === "blue") {
		gallery.className = "blueBackground";
	} if (backgroundColourValue === "green") {
		gallery.className = "greenBackground";
	}
}

// change text colour

function textColour(formInput) {
	var textColourValue = getSelectedValue(formInput.text);
	var gallery = document.getElementById("descriptionContainer");

	if (textColourValue === "default") {
		gallery.className = "defaultText";
	} if (textColourValue === "white") {
		gallery.className = "whiteText";
	} if (textColourValue === "black") {
		gallery.className = "blackText";
	} if (textColourValue === "red") {
		gallery.className = "redText";
	} if (textColourValue === "blue") {
		gallery.className = "blueText";
	} if (textColourValue === "green") {
		gallery.className = "greenText";
	}
}
//-->
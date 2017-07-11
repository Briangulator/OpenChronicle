/**
 * OpenChronicle:
 * script.js
 * 
 * Makes the navigation bar open/close button work.
 */
window.onload = function() {
	var isOpen = true,
		button = document.getElementsByTagName("button")[0],
		nav = document.getElementsByTagName("nav")[0].style,
		div = document.getElementsByTagName("div")[0].style;
	button.onclick = function() {
		if (isOpen) {
			button.innerHTML = "<<";
			nav.display = "none";
			div.marginRight = "0px";
		} else {
			button.innerHTML = ">>";
			nav.display = "block";
			div.marginRight = "230px";
		}
		isOpen = !isOpen;
	};
};

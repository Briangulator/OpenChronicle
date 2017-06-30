var open = true;
function nav() {
	document.getElementsByTagName("button")[0].innerHTML = open ? "<<" : ">>";
	document.getElementsByTagName("nav")[0].style.display = open ? "none" : "block";
	document.getElementsByTagName("div")[0].style.marginRight = open ? "0px" : "230px";
	open = !open;
}

window.onload = function() {
	initColorPicker ();
};

function initColorPicker() {
	let colorbox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	setColorPickerEventListeners(colorbox,rgb);
}
function setColorPickerEventListeners(colorBox, rgb) {
	rgb.red.addEventListener('change', () => {
		console.log("Red value: "., rgb.red.value)
	})
}
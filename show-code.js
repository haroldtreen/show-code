var div = $('#content');
var bg = $('#background');

bg.text(div.html());

var windowHeight = $(window).height();
var containerHeight = $('#show-code').height();
var contentHeight = div.height();

console.log('Window Height: ', windowHeight);
console.log('Content Height: ', contentHeight);
console.log('Client Height: ', document.body.clientHeight);

var clientHeight = document.body.clientHeight;
var backgroundHeight = bg.height();
var X = (windowHeight - backgroundHeight)/(windowHeight - clientHeight);

$(document).scroll(function(event) {
	// parallax();
});

var parallax = function() {
	// console.log(document.body.scrollTop);
	var scrollTop = document.body.scrollTop;
	old = Math.floor(X * scrollTop);
	if(scrollTop < windowHeight - clientHeight + 10) {
		document.getElementById('background').style.top = old;
	}

	window.requestAnimationFrame(parallax);
};

window.requestAnimationFrame(parallax);

/*

Window Height -
backgroundHeight - client = top
backgroundHeight - top = client
backgroundHeight - client*X = 0
backgroundHeight/X = client
backgroundHeight/client = X

Input: 0 -> windowHeight - clientHeight;
Output: 0 -> windowclientHeight - backgroundHeight;

X * (windowHeight - clientHeight) = clientHeight - backgroundHeight;

top -> 0 / clientHeight - backgroundHeight
*/

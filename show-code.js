var div = $('#content');
var bg = $('#background');

bg.text(div.html());

var windowHeight = $(document.body).height();
var contentHeight = div.height();

console.log('Window Height:', windowHeight);
console.log('Content Height: ', contentHeight);
console.log('Client Height:', )

$(document).scroll(function(event) {
	document.getElementById('background').style.top = - 2* document.body.scrollTop;
});

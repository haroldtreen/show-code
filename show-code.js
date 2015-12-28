var $content = $('#sc-content');
var $bg = $('#sc-background');
var $container = $('#show-code');

var windowHeight;
var containerHeight;
var offsetTop;

var clientHeight;
var backgroundHeight;

var maxBackgroundTop;
var maxContainerScroll;

var scrollMultiplier;

var maxScrollTop;

var oldTop;

var setupVariables = function() {
    windowHeight = $(window).height();
    containerHeight = $container.height();
    offsetTop = $container.offset().top;

    clientHeight = document.body.clientHeight;
    backgroundHeight = $bg.height();

    maxBackgroundTop = containerHeight - backgroundHeight;
    maxContainerScroll = containerHeight - clientHeight;

    scrollMultiplier = maxBackgroundTop / maxContainerScroll;

    maxScrollTop = windowHeight - clientHeight + 10; // To avoid rubber band jitter
};

var updateBackground = function() {
    var scrollTop = document.body.scrollTop; // Get global scroll position
    var containerScroll = Math.max(0, scrollTop - offsetTop); // Convert to container scroll position
    var backgroundScroll = Math.floor(containerScroll * scrollMultiplier); // Calculate background scroll postion
    var top = Math.max(maxBackgroundTop, backgroundScroll); // Choose the max

    // Scroll background if it has changed and scroll is not overshooting
    if (scrollTop < maxScrollTop && top !== oldTop) {
        // document.getElementById('sc-background').style.top = top;
        $bg.css({ top: top + 'px' });

        oldTop = top;
    }
};

var parallax = function() {
    updateBackground();
    window.requestAnimationFrame(parallax);
};

var showCodeStart = function() {
    $bg.text($content.html());
    setupVariables();
    window.addEventListener('resize', function() {
        setupVariables();
    });
    window.requestAnimationFrame(parallax);
};

showCodeStart();

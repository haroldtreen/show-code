(function(global) {

// Cached variables
var containerEl;
var backgroundEl;

var containerTop;
var scrollTop;

var scrollMultiplier;
var maxBackgroundTop;

var oldTop;
var isAnimating = false;

var getDimensions = function(elem) {
    return elem.getBoundingClientRect();
};

var getScroll = function() {
    return window.pageYOffset;
};

var setupVariables = function() {
    var clientHeight = window.innerHeight;

    var containerDims = getDimensions(containerEl);
    var backgroundDims = getDimensions(backgroundEl);

    containerTop = containerDims.top + getScroll(); // Want top position when not scrolled

    var maxContainerTop = containerDims.height - clientHeight;
    maxBackgroundTop = Math.min(0, containerDims.height - backgroundDims.height); // 0 if container is bigger then background

    scrollMultiplier = maxBackgroundTop / maxContainerTop;
};

function prefix (obj, prop, value) {
	var prefs = ['webkit', 'Moz', 'o', 'ms'];
	for (var pref in prefs) {
		obj[prefs[pref] + prop] = value;
	}
}

var updateBackground = function() {
    var containerScroll = Math.max(0, scrollTop - containerTop); // Convert to container scroll position
    var backgroundScroll = Math.floor(containerScroll * scrollMultiplier); // Calculate background scroll postion

    var top = Math.max(maxBackgroundTop, backgroundScroll);

    // Scroll background if it has changed and scroll is not overshooting
    if (top !== oldTop) {
		prefix(backgroundEl.style, 'Transform', 'translate3d(0,' + top + 'px,0)');

        oldTop = top;
        window.requestAnimationFrame(updateBackground);
        isAnimating = true;
    } else {
        isAnimating = false;
    }
};

var createBackground = function() {
    var bg = document.createElement('code');
    bg.id = 'sc-background';
    bg.className = 'language-markup';
    return bg;
};

var parallax = function() {
    if (!isAnimating) {
        scrollTop = getScroll(); // Set only for resize/scroll
        updateBackground();
    }
};

var setupEventListeners = function() {
    window.addEventListener('resize', function() {
        setupVariables();
        parallax();
    });
    document.addEventListener('scroll', function() {
        parallax();
    });
};

var showCode = function() {
	backgroundEl = createBackground();
	containerEl = document.getElementById('sc-container');

	var bgContainer = document.createElement('div');
	bgContainer.id = 'sc-background-container';

	bgContainer.appendChild(backgroundEl);

    backgroundEl.textContent = containerEl.innerHTML;
    containerEl.appendChild(bgContainer);

    setupVariables();
    if(window.matchMedia("(min-width: 800px)").matches) {
        setupEventListeners();
    }
};

global.showCode = showCode;
})(window);

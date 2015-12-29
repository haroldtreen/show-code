(function() {
    // Cached variables
    var containerEl;
    var backgroundEl;

    var backgroundDims;
    var containerDims;

    var scrollMultiplier;
    var maxBackgroundTop;
    var maxScrollTop;

    var oldTop;

    var getDimensions = function(elem) {
        return elem.getBoundingClientRect();
    };

    var setupVariables = function() {
        var windowHeight = document.documentElement.clientHeight;
        var clientHeight = document.body.clientHeight;

        containerDims = getDimensions(containerEl);
        backgroundDims = getDimensions(backgroundEl);

        var maxContainerTop = containerDims.height - clientHeight;
        maxBackgroundTop = Math.min(0, containerDims.height - backgroundDims.height); // 0 if container is bigger then background

        scrollMultiplier = maxBackgroundTop / maxContainerTop;

        maxScrollTop = windowHeight - clientHeight + 10; // To avoid rubber band jitter
    };

    var updateBackground = function() {
        var scrollTop = document.body.scrollTop; // Get global scroll position
        var containerScroll = Math.max(0, scrollTop - containerDims.top); // Convert to container scroll position
        var backgroundScroll = Math.floor(containerScroll * scrollMultiplier); // Calculate background scroll postion

        var top = Math.max(maxBackgroundTop, backgroundScroll);

        // Scroll background if it has changed and scroll is not overshooting
        if (scrollTop < maxScrollTop && top !== oldTop) {
            backgroundEl.style.top = top;
            oldTop = top;
        }
    };

    var parallax = function() {
        updateBackground();
        window.requestAnimationFrame(parallax);
    };

    var createBackground = function() {
        var bg = document.createElement('code');
        bg.id = 'sc-background';
        bg.className = 'language-markup';
        return bg;
    };

    var showCodeStart = function() {
        backgroundEl = createBackground();
        containerEl = document.getElementById('show-code');

        backgroundEl.textContent = containerEl.innerHTML;
        containerEl.appendChild(backgroundEl);

        setupVariables();
        window.addEventListener('resize', function() {
            setupVariables();
        });
        window.requestAnimationFrame(parallax);
    };

    showCodeStart();
})();

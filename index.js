(function() {
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

    var setupVariables = function() {
        var clientHeight = window.innerHeight;

        var containerDims = getDimensions(containerEl);
        var backgroundDims = getDimensions(backgroundEl);

        containerTop = containerDims.top + document.body.scrollTop; // Want top position when not scrolled

        var maxContainerTop = containerDims.height - clientHeight;
        maxBackgroundTop = Math.min(0, containerDims.height - backgroundDims.height); // 0 if container is bigger then background

        scrollMultiplier = maxBackgroundTop / maxContainerTop;
    };

    var updateBackground = function() {
        var containerScroll = Math.max(0, scrollTop - containerTop); // Convert to container scroll position
        var backgroundScroll = Math.floor(containerScroll * scrollMultiplier); // Calculate background scroll postion

        var top = Math.max(maxBackgroundTop, backgroundScroll);

        // Scroll background if it has changed and scroll is not overshooting
        if (top !== oldTop) {
            backgroundEl.style.top = top + 'px';
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
        scrollTop = document.body.scrollTop; // Set only for resize/scroll
        if (!isAnimating) {
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

    var showCodeStart = function() {
        backgroundEl = createBackground();
        containerEl = document.getElementById('show-code');

        backgroundEl.textContent = containerEl.innerHTML;
        containerEl.appendChild(backgroundEl);

        setupVariables();
        setupEventListeners();
    };

    showCodeStart();
})();

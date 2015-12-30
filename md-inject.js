var mdUrls = [
    'https://cdn.rawgit.com/haroldtreen/show-code/master/README.md'
];

var contentSelector = '#content';
var marked = window.marked;

var injectResponse = function(mdText) {
    var html = marked(mdText);
    var content = document.querySelector(contentSelector);
    content.innerHTML += html;
};

mdUrls.forEach(function(url) {
    $.get(url, function(data) {
        injectResponse(data);
        window.showCode();
        window.Prism.highlightElement(document.getElementById('sc-background'));
    });
});

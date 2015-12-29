# show-code
Using the source code in a container as the background for the container.

## Usage

1. Install the npm package
```bash
npm install show-code --save
```

2. Include the show-code js/css in your HTML
```html
<head>
        <!-- Head contents -->
        <link rel="stylesheet" type="text/css" href="node-modules/show-code/stylesheet.css">
</head>
<body>
        <!-- Body contents -->
        <script type="text/javascript" src="node-modules/show-code/index.js"></script>
</body>
```

3. The add `show-code` ID to a container
```html
<div id='show-code'>
    <span>All your content!</span>
</div>
```

4. **Bonus:** Add external libraries like [Prism](http://prismjs.com/index.html) for syntax highlighting.
```html
<head>
        <!-- Head contents -->
        <link rel="stylesheet" type="text/css" href="./prism.css">
</head>
<body>
        <!-- Body contents -->
        <script type="text/javascript" src="./prism.js"></script>
</body>
```

## Example:
```
npm install -g serve
cd show-code
serve
open http://localhost:3000/example/
```

![Example](https://raw.githubusercontent.com/haroldtreen/show-code/master/example/example.png)

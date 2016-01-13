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
        <link rel="stylesheet" type="text/css" href="node-modules/show-code/build/show-code.min.css">
  </head>
  <body>
        <!-- Body contents -->
<<<<<<< HEAD
        <script type="text/javascript" src="node-modules/show-code/index.js"></script>
=======
        <script type="text/javascript" src="node-modules/show-code/build/show-code.min.js"></script>
>>>>>>> master
        <script>
            window.showCode(); // Run when your container is ready
        </script>
  </body>
  ```

3. The add `show-code` ID to a container
  ```html
  <div id='sc-container'>
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

## Customization

When the background is injected it will have the `sc-background` ID. Using this selector, you can apply custom styles to your background.

```css
#sc-background {
    border-radius: 5px;
}
```

## Example:
See it in action [here](https://haroldtreen.github.io/show-code/)

**OR**

```bash
npm install -g serve
git clone git@github:haroldtreen/show-code --branch gh-pages
serve show-code
open http://127.0.0.1:3000/
```

```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], //this is where I add index.html and src files
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
}
```
This configuration targets both `index.html` and files within the `src` directory.  However, if you have Tailwind directives in your HTML that aren't picked up, verify that the paths are correct, that `index.html` is in the root of your project, and that the `src` directory is also in the correct location relative to your `tailwind.config.js` file.  If your files are structured differently, adjust the `content` array accordingly.
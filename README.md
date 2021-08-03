
>A Customizable JS Wiki built on Node.js

Welcome to FinnikyWiki, a contained Wiki that can be run locally via Node.js on localhost:3000, and a sort of "mash-up" of <a href="https://github.com/Jermolene/TiddlyWiki5">@Jermolene's TiddlyWiki5</a> and <a href="https://github.com/sbrl/Pepperminty-Wiki/">@sbrl's PeppermintyWiki</a>. The project is open source under GNU-v3 License, which means anyone can Contribute, Fork, or Copy (please give attribution)!

Built by <a href="https://github.com/flancast90">@flancast90</a>, a bit of Stack Overflow :), and the rest by contributors (like you!), FinnikyWiki is built to be a "revolutionary software," implementing a completely local file structure to power its "pages." Because of this, and the Node.js ```fs``` system, Finniky changes are near-instant.

**Latest Version:** [![stable version badge](https://img.shields.io/badge/Stable-v.2.1-brightgreen)](https://github.com/flancast90/Finniky-on-Node/releases/latest)


## Getting Started
Finniky can be set-up with just a few simple terminal commands and Node.js NPM installs (if you haven't already). The steps to do so are detailed below:<br> 
1. Download Node.js from <a href="https://nodejs.org/en/">The Official Node.js Project</a><br>
2. Once Node.js is installed on your system, intall the Finniky Dependencies 
```terminal
npm install express
npm install body-parser
```
3. <a href="https://github.com/flancast90/Finniky-on-Node/archive/refs/heads/main.zip">Download Finniky-on-Node from this repo</a>, keeping all the files in the same directory 
4. start Node.js and boot-up Finniky
```terminal
cd Finniky-on-Node-Location
node server.js
```
5. Navigate to localhost:3000, where Finniky should now be visible!

**[Website](https://www.finnsoftware.net)**

## Screenshots:
![Finniky Home Page](https://i.imgur.com/8yRuJxF.png)


## To-Do:
This is an (ever-growing) list of all my <del>burdens and failures</del> things that I (hope) to add to FinnikyWiki2 in the future:
  - Better Revision-History (for example, be able to restore, compare, etc) 
  - SVG library for quick "click-and-go" messages or infographics
  <del>- Page and User list (option for listing all *registered* users, and for displaying all pages in the wiki, linking back to the correct page)</del>
  <del>- Better security. Finniky is in its early stages, and already there are several serious issues. I plan to fix these with AES encryption, as well as improve      upon hosting files (trust me, it's hard using only client-side JS & HTML as well as no *.htaccess* files).</del>
  - Add sponsor and star buttons to Wiki homepage (It'll help with college, hopefully!)
  - Have an idea? share it with me! <a href="mailto:flancast90@gmail.com">flancast90@gmail.com</a> or [open an issue](https://github.com/flancast90/Finniky-on-Node/issues/new)


## Contributor How-To:
Contributions are very welcome! All you need to do is create a [Pull Request](https://github.com/flancast90/Finniky-on-Node/compare) or make a [New Issue](https://github.com/flancast90/Finniky-on-Node/issues/new). I'll do my best to add these after <del>painstaking review and hardship</del> (I swear, they're welcome). Please also make sure to include the code as released under the MIT License (so I can use it!).


## License
FinnikyWiki2 on Node.js, its code, and its content, are released under the GNU v.3 License. The full terms can be found in the `License` file, and are also described pretty well [Here](https://opensource.org/licenses/GPL-3.0).





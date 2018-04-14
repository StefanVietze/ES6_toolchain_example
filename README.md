# ES6_toolchain_example

Repository with step-by-step commits of every step of the ES6 toolchain with npm

## Explained

This repository illustrates the steps of the ES6 build toolchain with npm.
Every single step is tracked with a commit. One can see all changes while browsing the GIT history tree.

## Requirements

node.js and npm must be installed on the device

## Checkout specific step

To checkout a specific step use:

`git checkout <git_commit_hash> .`

To checkout most recent version use:

`git checkout git checkout tags/latest_version`

## Steps taken during the tutorial

1. Prepare project with index.html and index.js - "old school" ES5, direct import from CDN  
    * Check that browser console gives log output
    * Recognize that momentjs library is loaded from CDN

    Git commit:    `e3f95e69cecf6d86a63aa5270d8c373bdd195583`

2. Initialize npm
    * Initialize npm by calling `npm init` in project directory.
    * Check that `package.json` is created as expected.

    Git commit: `28ff738eaf217ddc6c5ac3a77926b118230ad3e1`

3. Install moment.js
    * Use `npm install moment --save` to install the library
    * Check changes in `package.json`

    Git commit: `181ae8467f8e013c8533ab1879244500b7847497`

4. Adapt index.html and check that everything stil works
    * Change script source from CDN to local file in node_modules:
    `<script src="node_modules/moment/min/moment.min.js"></script>`

    Git commit: `d1cc2de10ad8aa83ce30a005dd21248b7cff1665`

5. Use webpack as module bundler to merge dependencies to single file
    * Install webpack using `npm install webpack --save-dev`
    * Check `package.json` to see changes
    * Check `node_modules` folder and see what has been installed
    * Generate `bundle.js` using: 

        `./node_modules/.bin/webpack index.js -o bundle.js` 
        
        Bash syntax!, on Windows use "\\" instead of "/"

        Command might addtionally ask to install `webpack-cli`

    * Replace script references in `index.html` to refer to `bundle.js`
    * Add `require` based import of `moment` to `index.js`:

        `const moment = require('moment');`

    **Additional information**

    For more details about node.js module export refer to: 
    
    https://www.sitepoint.com/understanding-module-exports-exports-node-js/

# es6-playground
Place to load scripts to test out using es6. Simply have babel 6 installed globally and run files like ``` babel-node example.js ```

# Babel 6 Installation and Set Up

run ```npm install -g babel-cli ```

to install babel globally (if you haven't already)

also make sure you ``` npm install ```

Installing globally here is a good thing as you may want to use babel on lots of things however now from babel v6 you can specify what babel will actually do for your project, if you give it nothing it will do nothing (every service is opt in).

For each project in the root of the folder create a .babelrc file which you can customise to include which transformations you'd like to include.

In this repo we have included a preset module es2015 (giving us everything from there). This needs to be installed from npm.

# Import/Export Example

check import.js and export.js and run them to see whats going on.

see for more info: http://www.2ality.com/2014/09/es6-modules-final.html

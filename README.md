Steps for Creating React app using Webpack and Babel

step-1 :- Make a Folder name as Practical-02

step-2 :- Make Two Sub-folders named src and public
        - The public folder will handle any static asset
        
step-3 :- Add index.html file in public folder and add HTMl markup to it

step-4 :- now, in terminal, execute this command "npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0"
          which adds babelcore, babelcli, babelenv to your project and will also add package.json to it.
     
step-5 :- create a new file in root directory named .babelrc and in that we're telling babel that we are using react and env as presets plugin.

step-6 :- now, in terminal, execute this command "npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2" which adds all dependencies related to webpack.

step-7 :- create a new file in root directory named webpack.config.js . This file exports an object with webpack’s configuration.

step-8 :- now, in terminal, execute this command "npm install react react-dom". which will install all dependensies related to react and react-dom.

step-9 :- now we need to tell react app where to hook into the DOM so, we will create a file named index.js in src folder.

step-10:- create another file in src named App.js for react component.

step-11:- create one more file in src named App.css that will contain the css properties of App.js component.

spet-12:- your directory should look something like this 

+-- public
| +-- index.html
+-- src
| +-- App.css
| +-- App.js
| +-- index.js
+-- .babelrc
+-- package-lock.json
+-- package.json
+-- webpack.config.js

step-13:- now, last step is to add this part of json code to your package.json file

"scripts": {
"start": "webpack-dev-server --mode development"
},

step-14:- now in terminal execute npm start.






















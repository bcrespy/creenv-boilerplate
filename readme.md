# The creative environment boilerplate

Welcome to the creative environment boilerplate. This project will offer the coverage of what you need in order to unleash your creative skills without having to care about the boring set up. You will be able to write visuals using the features of es6+ and the helpers that creenv provides with the project (color operations, GUI controls, vectors, sound analysis, [see all the modules here](https://test.com))

In order to use this project, I recommend having a solid knowledge of javascript and a basic knowledge of es6 (import/export, class).

## 1. Useful commands 

In order to run this environment, you will only need to remember a limited amount of informations, you will learn the rest on the go. 

### Start the server 

The project comes with a live reload developement server. It means that once you will run a command, your browser will be synced to your code: every update you make to the code will result in an refresh on the browser. To start the local server, go to the root of the project and run the following command: 

``` bash
npm run start 
```

If everything goes as it's planed to, a webpage pointing to the server should open in your default browser. This webpage will update everytime you save modifications to your code. 

### Use creenv modules

Usually, the Creenv modules are well-documented. If you need one of them (which might be the case since they were designed to be useful in a creative context), go the the github page of the module. Some useful modules: 

- stats - display informations about stats 
- gui-controls - easy to use and customizable controls 
- file-loader - a file loader to dynamically load files into your app 
- vector - vector operations 
- 

### Publish your work 

Once you're done working, you will need to build the application in order to publish it. You can do so by running:

``` bash
npm run build 
```

This command will build your code into the /dist folder. To publish your work online, just upload the content of the /dist folder to the web.

## 2. Code structure 

There is one main thing you need to know: you have to create a class that extends the **Creenv** class from the *@creenv/core*. Once done, their are 2 main method you have to inherit: the init(), to initialize the required data, and the render() method, which will be called on each frame. There is already an existing example running in the boilerplate.
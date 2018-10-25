# Creenv, the creative environment

Creenv was designed to ease the process of setting up a modern javascript environment dedicated to creative projects. The CLI installs a ready-to-be-used boilerplate project, which bundles useful modules for creative coders. If you ever wanted to develop an idea within the browser, but realised afterwards it was a pain in the ass to set up and develop an app with the complexity of the modern javascript ecosystem, creenv was made for you.

As a short introduction to what creenv is, this presentation video covers the basics and showcases some of the most useful functionnalities it provides.

(IMAGE POINTING TO THE VIDEO)

## 1. Installation 

This section explains how to install this creenv boilerplate. If you want a more detailed guide on both how to install and learn creenv, [please check the ressources index of creenv](https://github.com/bcrespy/creenv#readme)

If you have no idea on what those commands are and how they should be used, I recommend following the [beginner's guide on creenv installation](https://google.com)

*install creenv CLI globally:*

```bash
npm install -g create-creenv
```

*start a project by running:*

```bash
create-creenv your-project-name
```

*start the dev environment*

```bash
cd your-project-name
npm run start
```

This will install the project in the *your-project-name* folder and will set it up for you :). Then it runs the local server and watch your files for modifications. More details on how the environment works are available in the [boilerplate in details, (Learning table pt.4)](https://google.fr)

## 2. Usage

> The next sections will briefly cover how to use creenv. It is recommended to follow the learning table if you need a step-by-step support to learn a new tool.

### a. Commands you can run 

* Start the development server
```bash
npm run start
```

* Build your files. When you're [done working and want to publish your work online](https://google.com), this command will serve all the files you need into a */build* folder, at the root of the project.
```bash
npm run build
```

### b. The project structure 

This is how a creenv project is constructed:

```
your-project-name
| public 
| | index.html            // where you put your assets
| src
| | main.js               // the entry point
| | renderer.js
| webpack           
| | dev.config.js         // configuration files, you don't need to touch this
| | prod.config.js
| .gitignore              // same
| LICENSE 
| package.lock.json
| package.json 
| readme.md
```

#### The /public folder 

This is the folder you serve assets from. As it is now, only the index.html can be found. When you run the command `npm run start`, you start a developement server. Your javascript is bundled into **one** file, inserted into the *index.html* file. The index.html is the page loaded when you visit *http://localhost:3000*. When you save a modification to your code while `npm run start` is running, the javascript will be [*transpiled*](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) into a new file, which will be inserted in the html and loaded again. **Live**.

#### The /src folder 

This folder contains the logic of your application. The *main.js* file will be used as an entry point by the transpiler, when you run `npm run start` or `npm run build`. It means that you'll need to start the logic of your application here. The example provided within the starting project should be enough for you to understand how this works. Go ahead and open the *main.js* file ;).

Moreover, you can put your images in the /src folder and serve them using javascript. Here is [a working example](null) *-not written yet-*.

#### The /webpack folder and files at the root 

The webpack folder contains the config required by the transpiler. You can take a look at it, but you will probably never have to touch it :). The files at the root are used by npm (to manage package dependencies) and git (to exclude useless folders). 

### c. **How to work with Creenv**

After the installation, and whenever you want to work on your project, go to your project directory using cd 

``` bash 
cd path/to/my/project
```

To start developing, just run 

``` bash
npm run start 
```

It will start the development server, open it in your browser and watch for modifications to your files. So everytime you save, the webpage will **automatically reload**, making the development process easier and faster. 

### d. Work with Creenv modules

Creenv comes with already built-in modules, making your creative life easier. If you want to learn more about the available modules and their usage, following is a list of useful resources (they can be found in the [learning table](https://github.com/bcrespy/creenv/blob/master/learning-table.md)):

* [GUI Tools](http) - the graphical tools to empower your dev experience
* [Most useful modules](https://google) - a description of the modules you will probably use everytime you work with creenv
* [An exhaustive list of the creenv modules](http) - self explanatory

To use a creenv module, first of, load it into the file in which you want to use the module:

```js
import Module from '@creenv/module';
```

The module can then be used within the app: 

```js
// this is an example with uses the color module
import Color from '@creenv/color';

const magenta = new Color(255,0,255); // magenta

// let's set the body background to magenta
document.body.style.backgroundColor = magenta.rgb;
```

That's it, basically. From now, you can start and be creative :). Although it's not necessary, next section provides informations about useful modules that you may want to use to boost your creativity. **Especially the Core module, being used in this boilerplate.**

### e. The **Core** module

Even though it is easy to use, this module requires its own chapter because you need to understand it properly before using creenv. Fortunatly, such a chapter is available in [the github page of the module](https://github.com/bcrespy/creenv-core). By the way, this is an habit your should take. Whenever you need informations about a creenv module, check it's github page, such informations should be provided here, and if it's not you can ask your questions there :).

We will cover here the basics required to run an app with the core. First, a working example is available in this starter project, so go and check the *src/main.js* file.

**The Core object is abstract.** It means that it cannot be used directly, but must be inherited by another class. Only one method **needs** to be rewritten, and it's the render one. This method will be called each frame once the main loop has started. If you need to initialize variables, load data from file, you can do so by rewritting the *init()* method. Note that if this method returns a *Promise*, the render method will only be called after the Promise resolves. After your class is written, you have to bootstrap it. You can do so by instanciating your class and calling it's bootstrap method. **All of this is covered and explained in the current main.js file.**
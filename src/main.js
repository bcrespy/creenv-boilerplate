/**
 * Welcome to the creenv boilerplate. If you already want to start creating, go to the ./renderer.js file in which 
 * you will be able to play
 * 
 * For more informations on how to use creenv: 
 * <https://github.com/bcrespy/creenv/blob/master/learning-table.md>
 */


import Creenv from '@creenv/core';

/**
 * For the sake of the example, the rendering logic will take part in the render file
 * You should aways split a bit your code, it will make the process of identifying mistakes and improving your app easier :)
 */
import Renderer from './renderer';


/**
 * The main class can inherit the Core of creenv
 * As you can see, this simplifies the process of setting up your application 
 */
class MyProject extends Creenv {
  /**
   * The init method will automatically be called by the bootstrap method, and the end of the file. This is where you can fetch 
   * files (return a Promise in such a case, bootstrap will handle it automatically), allocate your data... etc
   */
  init() {
    super.init(); // REQUIRED - calls the parent method 

    // optional, it just show that you can set the framerate like that
    super.framerate(60);

    // for the example
    this.renderer = new Renderer();
    this.renderer.init();
  }

  /**
   * This function will be called at each frame, automatically, given the framerate, after the bootstrap method is called
   */
  render() {
    // for the example
    this.renderer.render(this.elapsedTime);
  }
}


/**
 * You instanciate your class and then call the bootstrap method.
 * This will start the rendering process
 */
let project = new MyProject();
project.bootstrap(); 
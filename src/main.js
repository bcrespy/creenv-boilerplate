/**
 * This is the demonstration project, it is installed when running the command 
 * create-creenv --mode demo
 * 
 * Hello. Welcome to the creative environment This project showcases the functionnalities of creenv and can be used as a good
 * starting point for learning creenv. However, it is still recommended that you take at look at the Learning Table, a central
 * document where all the basic informations about creenv can be found. 
 * 
 * <insert_link_to_learning_table_here>
 * 
 * 
 */


import Creenv from '@creenv/core';
import Canvas from '@creenv/canvas';
import GUI from '@creenv/gui';

// config + user controls 
import config from './config';
import controls from './user-controls';

/**
 * For the sake of the example, the rendering logic will take part 
 * in the render file
 * You should aways split a bit your code, it will make the process of
 * identifying mistakes and improving your app easier :)
 */
import Renderer from './renderer';



/**
 * The main class can inherit the Core of creenv
 * As you can see, this simplifies the process of setting up your 
 * application 
 */
class MyProject extends Creenv {
  /**
   * The init method will automatically be called by the bootstrap method,
   * and the end of the file. This is where you can fetch files (return a 
   * Promise in such a case, bootstrap will handle it automatically), 
   * allocate your data... etc
   */
  init() {
    super.init(); // REQUIRED - calls the parent method 

    // optional, it just show that you can set the framerate like that
    super.framerate(60);

    this.gui = new GUI(controls);

    // for the example
    this.renderer = new Renderer();
    this.renderer.init();
  }

  /**
   * This function will be called at each frame, automatically, given 
   * the framerate, after the bootstrap method is called
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
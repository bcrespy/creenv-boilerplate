/**
 * Pay attention to how the config object is used dynamically for the render
 * This shows how easy it can be to add and use controlled parameters :)
 */

import Canvas from '@creenv/canvas';
import Color from '@creenv/color';

import config from './config';


const BOUNCING_HEIGHT = 150,
      CUBE_SIZE = 250;

class Renderer {
  init () {
    this.canvas = new Canvas();
    this.cubeColor = new Color(255,0,255);
  }

  render (time) {
    this.canvas.fillStyle(this.cubeColor.rgb);
    this.canvas.background(config.backgroundColor.rgba);
    let translationY = Math.abs(Math.cos(time/1000)) * BOUNCING_HEIGHT;
    this.canvas.rect(this.canvas.width/2-CUBE_SIZE/2 + config.translation, this.canvas.height/2-CUBE_SIZE/2-translationY, CUBE_SIZE, CUBE_SIZE);

    if (config.drawText)
      this.canvas.context.fillText(config.text, this.canvas.width/2-CUBE_SIZE/2 + config.translation, this.canvas.height/2-CUBE_SIZE/2-translationY)
  }
}

export default Renderer;
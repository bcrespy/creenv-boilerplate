/**
 * This file just draws a moving rectangle
 * A better example will be added in the future 
 */

import Canvas from '@creenv/canvas';
import Color from '@creenv/color';


const TRANSLATION = 400,
      CUBE_SIZE = 250;

class Renderer {
  init () {
    this.canvas = new Canvas();
    this.backgroundColor = new Color(0,255,0);
    this.cubeColor = new Color(255,0,255);
  }

  render (time) {
    this.canvas.fillStyle(this.cubeColor.rgb);

    this.canvas.background(this.backgroundColor.rgb);
    let translation = Math.cos(time/1000) * TRANSLATION;
    this.canvas.rect(this.canvas.width/2+translation-CUBE_SIZE/2, this.canvas.height/2-CUBE_SIZE/2, CUBE_SIZE, CUBE_SIZE);
  }
}

export default Renderer;
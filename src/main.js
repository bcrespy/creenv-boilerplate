import { Creenv } from '@creenv/core';
import Canvas from '@creenv/canvas';
import test from './image.jpeg';

let toto = new Image();
toto.onload = () => { document.body.appendChild(toto) }
toto.src = test;


class MyProject extends Creenv {
  init() {
    this.x = 0;

    return new Promise( (resolve, reject) => {
      this.cvs = new Canvas();
      resolve();
    });
  }

  render() {
    this.cvs.fillStyle("blue");
    this.cvs.rect(this.x,50,40,40);
    this.cvs.fillStyle("red");
    this.cvs.context.fillRect( this.x, 10, 50, 20 );
    if (this.frames%2 === 0) {
      this.x++;
    }
  }
}


let project = new MyProject();
project.bootstrap();
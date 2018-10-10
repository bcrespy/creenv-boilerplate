/**
 * This config object will have its properties controlled by the user
 * interface 
 */

let config = {
  // the x translation of the cube 
  translation: 15,

  // the background color 
  backgroundColor: "rgba(255,0,255,1)",

  // weither or not we draw the text 
  drawText: true,

  // the text to be draw
  text: "creative environment"
};


/**
 * this allows the config object to be imported by:
 * import config from "./config.js
 */
export default config;
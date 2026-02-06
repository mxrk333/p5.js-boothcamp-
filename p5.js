 //let app; // PaintApp instance
 
 //function setup() {
  // createCanvas(800, 500);   // Create canvas
 //  app = new PaintApp();     // Initialize PaintApp
 //  app.init();               // Set background and init
 //}
 
 // function draw() {
 //   app.update();    // Handle mouse input and painting
  // app.renderUI();  // Render UI (buttons, etc.)
 // }
 
 // ==========================================================
 // Class: Utils
 // Static helper functions for calculations
 // ==========================================================
 // class Utils {
  //  static pointInRect(px, py, rx, ry, rw, rh) {
  //   return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
  //  }
 
  // static pointInCircle(px, py, cx, cy, r) {
 //    return dist(px, py, cx, cy) < r;
  // }
 // }
 
 // ==========================================================
 // Class: Brush
 // Encapsulates brush properties and drawing behavior
 // ==========================================================
 //class Brush {
  // constructor() {
  //   this.color = 'black';
 //    this.size = 20;
  //   this.shape = 'circle'; // 'circle' or 'rect'
  // }
 
  // setColor(c) { this.color = c; }
  // setSize(s) { this.size = s; }
  // setShape(s) { this.shape = s; }
 
  // render(x, y, px, py) {
   //  if (this.shape === 'circle') {
   //    stroke(this.color);
    //   strokeWeight(this.size);
    //   line(px, py, x, y); // smooth drawing
    // } else {
    //   noStroke();
    //   fill(this.color);
     //  rect(x - this.size / 2, y - this.size / 2, this.size, this.size);
    // }
  // }
 //}
 
 // ==========================================================
 // Class: PaintApp
 // Manages the UI, Input, and Canvas Logic
 // ==========================================================
 //class PaintApp {
 //  constructor() {
 //    this.brush = new Brush();
 //    this.bgColor = 'white';
 
     // Layout for UI margins
 //    this.layout = { top: 80, side: 40, bottom: 40 };
 
     // Define buttons (colors, sizes, shapes, clear)
 //    this.buttons = {
       colors: [
 //        { c: 'red', x: 60, y: 20 },
  //       { c: 'blue', x: 90, y: 20 },
   //      { c: 'green', x: 120, y: 20 },
   //      { c: 'black', x: 150, y: 20 },
   //      { c: 'white', x: 190, y: 20, label: 'Eraser' }
   //    ],
   //    sizes: [
   //      { s: 10, label: 'S', x: 260, y: 20 },
    //     { s: 20, label: 'M', x: 290, y: 20 },
     //    { s: 40, label: 'L', x: 320, y: 20 }
     //  ],
     //  shapes: [
     //    { type: 'rect', x: 360, y: 20 },
     //    { type: 'circle', x: 400, y: 30 }
     //  ],
     //  clear: { x: 440, y: 20, w: 40, h: 20 }
     //};
   //}
 
   //init() {
  //   background(this.bgColor);
   //}
 
   // Main loop function
   //update() {
   //  if (mouseIsPressed) {
   //    this.handleInput();     // check if a button is clicked
   //    this.handlePainting();  // paint on canvas
   //  }
   //}
 
   //handleInput() {
     // Color buttons
    // for (let btn of this.buttons.colors) {
    //   if (Utils.pointInRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
     //    this.brush.setColor(btn.label === 'Eraser' ? this.bgColor : btn.c);
     //    return;
      // }
    // }
 
     // Size buttons
     //for (let btn of this.buttons.sizes) {
      // if (Utils.pointInRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
      //   this.brush.setSize(btn.s);
      //   return;
     //  }
    // }
 
     // Shape buttons
     //if (Utils.pointInRect(mouseX, mouseY, this.buttons.shapes[0].x, this.buttons.shapes[0].y, 20, 20))
     //  this.brush.setShape('rect');
     //if (Utils.pointInCircle(mouseX, mouseY, this.buttons.shapes[1].x, this.buttons.shapes[1].y, 10))
     //  this.brush.setShape('circle');
 
     // Clear button
     //let clr = this.buttons.clear;
     //if (Utils.pointInRect(mouseX, mouseY, clr.x, clr.y, clr.w, clr.h))
     //  background(this.bgColor);
   //}
 
   //handlePainting() {
    // const inside = mouseX > this.layout.side &&
    //                mouseX < width - this.layout.side &&
     //               mouseY > this.layout.top &&
     //               mouseY < height - this.layout.bottom;
 
     //if (inside) {
      // this.brush.render(mouseX, mouseY, pmouseX, pmouseY);
    // }
   //}
 
   // ==================================
   // Rendering UI
   // ==================================
   //renderUI() {
   //  noStroke();
   //  fill(200);
   //  rect(0, 0, width, this.layout.top); // top bar
   //  rect(0, 0, this.layout.side, height); // left bar
   //  rect(width - this.layout.side, 0, this.layout.side, height); // right bar
   //  rect(0, height - this.layout.bottom, width, this.layout.bottom); // bottom bar
 
     // Colors
   //  for (let btn of this.buttons.colors) {
   //    if (this.brush.color === btn.c) { stroke(255,200,0); strokeWeight(3); }
   //    else noStroke();
   //    fill(btn.c);
   //    rect(btn.x, btn.y, 20, 20);
   //    if (btn.label) { fill(0); noStroke(); textSize(11); text(btn.label, btn.x-3, btn.y+35); }
   //  }
 
     // Sizes
     //for (let btn of this.buttons.sizes) {
      // if (this.brush.size === btn.s) { stroke(255,200,0); strokeWeight(3); } else noStroke();
       //fill(200); rect(btn.x, btn.y, 20, 20);
       //fill(0); noStroke(); text(btn.label, btn.x+6, btn.y+15);
   //  }
 
     // Shapes
     //let s = this.buttons.shapes;
     //if (this.brush.shape === 'rect') { stroke(255,200,0); strokeWeight(3); } else noStroke();
     //fill(80); rect(s[0].x, s[0].y, 20, 20);
     //if (this.brush.shape === 'circle') { stroke(255,200,0); strokeWeight(3); } else noStroke();
     //fill(80); circle(s[1].x, s[1].y, 20);
 
     // Clear
//     fill(255); noStroke(); rect(this.buttons.clear.x, this.buttons.clear.y, this.buttons.clear.w, this.buttons.clear.h);
 //    fill(0); text("Clear", this.buttons.clear.x+5, this.buttons.clear.y+15);
 //  }
 //}

// filepath: /Users/mxrk44/p5/p5.js
// ...existing code...
/*
 // ==========================================================
 // Main Entry Points (p5.js standard functions)
 // ==========================================================
 
 //let app; // PaintApp instance
 
 //function setup() {
  // createCanvas(800, 500);   // Create canvas
 //  app = new PaintApp();     // Initialize PaintApp
 //  app.init();               // Set background and init
 //}
 
 // function draw() {
 //   app.update();    // Handle mouse input and painting
  // app.renderUI();  // Render UI (buttons, etc.)
 // }
 
 // ==========================================================
 // Class: Utils
 // Static helper functions for calculations
 // ==========================================================
 // class Utils {
  //  static pointInRect(px, py, rx, ry, rw, rh) {
  //   return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
  //  }
 
  // static pointInCircle(px, py, cx, cy, r) {
 //    return dist(px, py, cx, cy) < r;
  // }
 // }
 
 // ==========================================================
 // Class: Brush
 // Encapsulates brush properties and drawing behavior
 // ==========================================================
 //class Brush {
  // constructor() {
  //   this.color = 'black';
 //    this.size = 20;
     this.shape = 'circle'; // 'circle' or 'rect'
   }
 
   setColor(c) { this.color = c; }
   setSize(s) { this.size = s; }
   setShape(s) { this.shape = s; }
 
   render(x, y, px, py) {
     if (this.shape === 'circle') {
       stroke(this.color);
       strokeWeight(this.size);
       line(px, py, x, y); // smooth drawing
     } else {
       noStroke();
       fill(this.color);
       rect(x - this.size / 2, y - this.size / 2, this.size, this.size);
     }
   }
 }
 
 // ==========================================================
 // Class: PaintApp
 // Manages the UI, Input, and Canvas Logic
 // ==========================================================
 class PaintApp {
   constructor() {
     this.brush = new Brush();
     this.bgColor = 'white';
 
     // Layout for UI margins
     this.layout = { top: 80, side: 40, bottom: 40 };
 
     // Define buttons (colors, sizes, shapes, clear)
     this.buttons = {
       colors: [
         { c: 'red', x: 60, y: 20 },
         { c: 'blue', x: 90, y: 20 },
         { c: 'green', x: 120, y: 20 },
         { c: 'black', x: 150, y: 20 },
         { c: 'white', x: 190, y: 20, label: 'Eraser' }
       ],
       sizes: [
         { s: 10, label: 'S', x: 260, y: 20 },
         { s: 20, label: 'M', x: 290, y: 20 },
         { s: 40, label: 'L', x: 320, y: 20 }
       ],
       shapes: [
         { type: 'rect', x: 360, y: 20 },
         { type: 'circle', x: 400, y: 30 }
       ],
       clear: { x: 440, y: 20, w: 40, h: 20 }
     };
   }
 
   init() {
     background(this.bgColor);
   }
 
   // Main loop function
   update() {
     if (mouseIsPressed) {
       this.handleInput();     // check if a button is clicked
       this.handlePainting();  // paint on canvas
     }
   }
 
   handleInput() {
     // Color buttons
     for (let btn of this.buttons.colors) {
       if (Utils.pointInRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
         this.brush.setColor(btn.label === 'Eraser' ? this.bgColor : btn.c);
         return;
       }
     }
 
     // Size buttons
     for (let btn of this.buttons.sizes) {
       if (Utils.pointInRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
         this.brush.setSize(btn.s);
         return;
       }
     }
 
     // Shape buttons
     if (Utils.pointInRect(mouseX, mouseY, this.buttons.shapes[0].x, this.buttons.shapes[0].y, 20, 20))
       this.brush.setShape('rect');
     if (Utils.pointInCircle(mouseX, mouseY, this.buttons.shapes[1].x, this.buttons.shapes[1].y, 10))
       this.brush.setShape('circle');
 
     // Clear button
     let clr = this.buttons.clear;
     if (Utils.pointInRect(mouseX, mouseY, clr.x, clr.y, clr.w, clr.h))
       background(this.bgColor);
   }
 
   handlePainting() {
     const inside = mouseX > this.layout.side &&
                    mouseX < width - this.layout.side &&
                    mouseY > this.layout.top &&
                    mouseY < height - this.layout.bottom;
 
     if (inside) {
       this.brush.render(mouseX, mouseY, pmouseX, pmouseY);
     }
   }
 
   // ==================================
   // Rendering UI
   // ==================================
   renderUI() {
     noStroke();
     fill(200);
     rect(0, 0, width, this.layout.top); // top bar
     rect(0, 0, this.layout.side, height); // left bar
     rect(width - this.layout.side, 0, this.layout.side, height); // right bar
     rect(0, height - this.layout.bottom, width, this.layout.bottom); // bottom bar
 
     // Colors
     for (let btn of this.buttons.colors) {
       if (this.brush.color === btn.c) { stroke(255,200,0); strokeWeight(3); }
       else noStroke();
       fill(btn.c);
       rect(btn.x, btn.y, 20, 20);
       if (btn.label) { fill(0); noStroke(); textSize(11); text(btn.label, btn.x-3, btn.y+35); }
     }
 
     // Sizes
     for (let btn of this.buttons.sizes) {
       if (this.brush.size === btn.s) { stroke(255,200,0); strokeWeight(3); } else noStroke();
       fill(200); rect(btn.x, btn.y, 20, 20);
       fill(0); noStroke(); text(btn.label, btn.x+6, btn.y+15);
     }
 
     // Shapes
     let s = this.buttons.shapes;
     if (this.brush.shape === 'rect') { stroke(255,200,0); strokeWeight(3); } else noStroke();
     fill(80); rect(s[0].x, s[0].y, 20, 20);
     if (this.brush.shape === 'circle') { stroke(255,200,0); strokeWeight(3); } else noStroke();
     fill(80); circle(s[1].x, s[1].y, 20);
 
     // Clear
     fill(255); noStroke(); rect(this.buttons.clear.x, this.buttons.clear.y, this.buttons.clear.w, this.buttons.clear.h);
     fill(0); text("Clear", this.buttons.clear.x+5, this.buttons.clear.y+15);
   }
 }
} 


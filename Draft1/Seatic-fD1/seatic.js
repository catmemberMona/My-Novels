var canvas = document.getElementById('canvas');
   var ctx    = canvas.getContext('2d');

// ----- Rectangle setup -----------------

class Rectangle {

     constructor( x = 0, y = 0, fillColor = '#E9E7DB' ) {
       // Settings
       this.x   = x;
       this.y   = y;
       this.fillColor = fillColor;
       // Setup everything once parameters are setup
       this.setup();
     }
   
      setup() {
         // Move context to position
    ctx.translate( this.x, this.y );
    // Draw from new context position
    this.draw();
    // Restore context back to initial position
    ctx.setTransform(1,0,0,1,0,0);
      }
    
     
   
     draw() {
       // Draw Rectangle
       ctx.beginPath();
          ctx.strokeStyle = "black ";
          ctx.lineWidth = .35;
          
          ctx.rect(0, 0, 220, 30);
          ctx.stroke();
          
      
       // Fill color
       ctx.fillStyle = this.fillColor;
       ctx.fill();

     
     }
   }
   
   // Create Rectangle instances
   var T1 = new Rectangle( 15, 0 );
   var T2 = new Rectangle( 310, 0 );
   var T3 = new Rectangle( 615, 0 );

   //bottom rect
    var T4 = new Rectangle( 15, 356);
    var T5 = new Rectangle( 310, 356);
    var T6 = new Rectangle( 615, 356);


   class quoteRect {

    constructor( x = 0, y = 0, fillColor = 'whitesmoke' ) {
      // Settings
      this.x   = x;
      this.y   = y;
      this.fillColor = fillColor;
      // Setup everything once parameters are setup
      this.setup();
    }
  
     setup() {
        // Move context to position
   ctx.translate( this.x, this.y );
   // Draw from new context position
   this.draw();
   // Restore context back to initial position
   ctx.setTransform(1,0,0,1,0,0);
     }
   
    
  
    draw() {
      // Draw quoteRect
      ctx.beginPath();
         ctx.strokeStyle = "black";
         ctx.lineWidth = .25;
         
         
         ctx.rect(0, 0, 219, 325);
         ctx.stroke();

      // Fill color
      ctx.fillStyle = this.fillColor;
      ctx.fill();

    
    }
  }
  
  // Create quoteRect instances
  var Q1 = new quoteRect( 15.5, 31 );
  var Q2 = new quoteRect( 310.5, 31 );
  var Q3 = new quoteRect( 615.5, 31 );





  class lgRect {

    constructor( x = 0, y = 0, fillColor = 'whitesmoke' ) {
      // Settings
      this.x   = x;
      this.y   = y;
      this.fillColor = fillColor;
      // Setup everything once parameters are setup
      this.setup();
    }
  
     setup() {
        // Move context to position
   ctx.translate( this.x, this.y );
   // Draw from new context position
   this.draw();
   // Restore context back to initial position
   ctx.setTransform(1,0,0,1,0,0);
     }
  draw() {
    // Draw lgRect
    ctx.beginPath();
       ctx.strokeStyle = "black";
       ctx.lineWidth = .6;
       
       
       ctx.rect(0, 0, 800, 900);
       ctx.stroke();

    // Fill color
    ctx.fillStyle = this.fillColor;
    ctx.fill();

  
  }
}
var L1 = new lgRect( 25, 600);



  ctx.font = "20px Arial";
  ctx.fillText("Hello World", 100, 150);



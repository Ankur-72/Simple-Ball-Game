class Paper {
    constructor(x, y, width,height) {
      var options = {
        isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':10.2
       }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      //this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(1.5);
     // stroke("orange");
      fill("magenta");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  
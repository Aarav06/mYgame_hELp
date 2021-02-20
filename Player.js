class Player{
  constructor(x,y){
  //   var options = {
  //     'restitution':0.8,
  //     'friction':1.0,
  //     'density':1.0
  // }
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("character.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    fill('white');
    //rect(200,200, 50, 50);
    image(this.image, 40, 50, 100, 100);
    imageMode(CENTER);
    if(keyDown(UP_ARROW)){
      if(pos.y > -200)
      pos.y = pos.y -5;
    }
    if(keyDown(DOWN_ARROW)){
      if(pos.y < 550)
      pos.y = pos.y +5;
    }
    if(keyDown(LEFT_ARROW)){
      if(pos.x > -200)
      pos.x = pos.x -5;
    }
    if(keyDown(RIGHT_ARROW)){
      if(pos.x <950) 
      pos.x = pos.x +5;
  }
    pop();
  }
}

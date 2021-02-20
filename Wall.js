class Wall{
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.image = loadImage("sprites/bubble.png");
        World.add(world, this.body);
      }
      display(){
        rect(this.x, this.y, this.width, this.height);
      }
}
class Box{
    constructor(x,y,width,height){
    
        var options = {

        'restitution': 0.3,
        'density': 1.0,
        'friction':0.1,
        }
    this.body = Bodies.rectangle (x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display(){
     var pos = this.body.position;
     var angle = this.body.angle;
      push ();
     translate (pos.x,pos.y);
     rotate (angle);
     fill ("white")
     rectMode(CENTER);
     rect (0,0,this.width,this.height);
     pop ();
}
 }
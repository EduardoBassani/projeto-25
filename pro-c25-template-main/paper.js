class paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            retitution:0.3,
            friction:0.9,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,options)
        world.add(world,this.body);
    }
    display(){
    var paperPos=this.body.position;

    push()
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER);
    fill("red");
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
    Pop()
    }
    
    
}
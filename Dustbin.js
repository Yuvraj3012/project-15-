class Dustbin {
    constructor(x,y,width,height){
    var a = {'restitution': 0.3, }
    
       this.body =  Bodies.rectangle(x,y,width,height,a);
       this.width= width
           this.height=height
           this.image=loadImage("sprites/dustbingreen.png")
    World.add(world,this.body)
    
    }
    display(){
    
    var p = this.body.position
    var angle = this.body.angle
    
    imageMode(CENTER)
    fill("white")
    image(this.image,width/1.3, 680,200,500)
   
    }
    
    
    }
       
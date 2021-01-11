class Bob{

    constructor(x,y,width,height) {
        var option={
            isStatic:true
        }
        this.body =  Bodies.circle(x,y,width,height,option); 
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);  
    }
    

    display(){

        var pos = this.body.position;

        ellipseMode(CENTER);
        fill("brown");
        ellipse(pos.x,pos.y,this.width,this.height);

    }

}
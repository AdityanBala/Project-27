class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA:body1,
            bodyB:body2,
            length:400,
            PointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        var PointA = this.rope.bodyA.position;
        var PointB = this.rope.bodyB.position;

        var PointAX = PointA.x
        var PointAY = PointA.y
            
        var PointBX = PointB.x+this.offsetX
        var PointBY = PointB.y+this.offsetY

        strokeWeight(5);
        
        line(PointAX,PointAY,PointBX,PointBY)
    }
}
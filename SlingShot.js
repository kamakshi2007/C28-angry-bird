class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.05
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
       if(this.body.bodyA){
            var pointA =  this.body.bodyA.position;
            var pointB =  this.body.pointB;
            push();
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
       }
    
    }

    fly(){
        this.body.bodyA = null;
    }
}
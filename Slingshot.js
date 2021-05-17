class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        image(this.sling1, 200, 25);
        image(this.sling2, 170, 25);

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(6);
            stroke("#301608")
            if(pointA.x <= 220)
            {
                line(pointA.x - 10 , pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 20 , pointA.y, pointB.x + 20, pointB.y);
                image(this.sling3, pointA.x - 27 , pointA.y - 10 , 20, 30);
            }
            else{
              /*left*/  line(pointA.x + 15 , pointA.y + 15, pointB.x - 20, pointB.y);
                line(pointA.x + 25 , pointA.y-2, pointB.x + 20, pointB.y);
                image(this.sling3, pointA.x +15 , pointA.y -2 , 20, 30);
            }
            pop();

        }
    }

}
//Step 1 of creating a blueprint
//use the key word class followed by add a space then name the class
//In order to name a class- from the first word the first letter should
//be uppercase
class Box {
    /*class consists properties and 
    function(methods) which are 
    required for an Object*/

    /*we're supposed to write the properties inside a constructor
    A constructor is a function which consists of properties that
    should be given to the object*/

    constructor(x, y, w, h) {
        //this keyword helps you to point to the current object.
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //we need to have another function  to display the box
    display() {
        var pos = this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }






}
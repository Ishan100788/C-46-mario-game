class Coin {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rx = posX; //setting the x posing where obstacle will be created  
     // this.spt.setCollider(); //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("coin",coinAnimation);
      this.spt.scale=0.10;
     
    }
}

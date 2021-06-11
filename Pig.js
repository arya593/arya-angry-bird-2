class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image2 = loadImage("angrybirdgameimages/kingpig.png")
    this.image3 = loadImage("angrybirdgameimages/pig.png")
    this.image4  = loadImage("angrybirdgameimages/pig2.png")
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image2, this.body.position.x, this.body.position.y, 50, 50);
    image(this.image3, this.body.position.x, this.body.position.y,100,100)
    image(this.image4, this.body.position.x, this.body.position.y,150,150)

     pop();   
    }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};
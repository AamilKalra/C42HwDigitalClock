var h, m, s;

function setup() {
  createCanvas(400,300);
}

function draw() {
  background(0, 0, 51); 
  //Calculating the time 
  h=hour();
  m=minute();
  s=second();
  
  //console.log(h,m,s);
  textSize(40)
  fill(225,225,225)
  text("MY DIGITAL CLOCK", 10,100)

  textSize(40)
  fill(225,225,225)
  text(h,100,200)

  fill("red")
  text(":",152,200)
  
  fill(225,225,225)
  text(m,170,200)

  fill("red")
  text(":",220,200)

  fill(225,225,225)
  text(s,240,200)
  drawSprites();
}
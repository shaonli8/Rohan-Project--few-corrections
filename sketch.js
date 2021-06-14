var thiefImg,policeImg,barrieImg,carImg,holeImg,bgImg
var road,thief,police,wall1,wall2

function preload (){
    thiefImg=loadAnimation("thief1.png","thief3.png","thief2.png")
    policeImg=loadAnimation("cop1.png","cop2.png","cop3.png")
    barrieImg=loadImage("barrie.png")
    carImg=loadImage("car.png")
    holeImg=loadImage("hole.jpg")
    bgImg=loadImage("road.png")
}

function setup(){
    createCanvas(550,400)
    
    road=createSprite(750,140)
    road.addImage(bgImg)
    road.scale=1.5
    road.velocityX=-3

    thief=createSprite(400,350)
    thief.addAnimation("running",thiefImg)

    police=createSprite(200,350)
    police.addAnimation("chasing",policeImg)
    police.scale=0.5

    wall1=createSprite(375,200,750,10)
    wall2=createSprite(375,400,750,10)

    wall1.visible=false
}
function draw(){
    background(0)
    
    if(road.x<0){
        road.x=720
    }

    if(keyDown("up")){
        thief.y -= 10
    }
    if(keyDown("down")){
        thief.y += 10
    }
    thief.collide(wall1)
    thief.collide(wall2)

    if(keyDown("space")){
        thief.velocityY=-15
    }
    thief.velocityY += 0.8
    barriers()
    drawSprites()
}

function barriers(){
    if(frameCount%180===0){
        var ran=Math.round(random(300,400))
        var barrier=createSprite(800,ran)
        barrier.addImage(barrieImg)
        barrier.velocityX=-3
        barrier.scale=0.1

        if(thief.y > barrier.y){
            thief.depth = barrier.depth+1
            police.depth = barrier.depth+1
        }
        else{
            barrier.depth = thief.depth +1
            barrier.depth = police.depth +1
        }
    }
   
}